import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { ShoppingCartProducts } from "./ShoppingCartProducts";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../app/db/db";
import { useState } from "react";

export const ShoppingCart = () => {
  const [productCart, setProductCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  useLiveQuery( async () => {
    const productDB = await db.cart.toArray();
    setProductCart(productDB);
  });
  const getTotalPrice = () => {
    const total = productCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    setTotalPrice(total)
  }
  useEffect(() => {
    if (productCart.length > 0) {
      getTotalPrice();
    }
  }, [productCart]);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {productCart?.map((product, index) => {
          console.log(product);
          return <ShoppingCartProducts key={index} item={product} />;
        })}
        <NavDropdown.Divider />
        <NavDropdown.Item>Total: ${totalPrice} </NavDropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
