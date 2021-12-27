import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { ShoppingCartProducts } from "./ShoppingCartProducts";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../app/db/db";
import { useState } from "react";

export const ShoppingCart = () => {
  const [productCart, setProductCart] = useState([]);
  useLiveQuery(async () => {
    const productDB = await db.cart.toArray();
    console.log(productDB);
    setProductCart(productDB);
  });
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Dropdown.Toggle>
      {productCart?.map((product, index) => {
        <ShoppingCartProducts key={index} item={product} />;
      })}
    </Dropdown>
  );
};
