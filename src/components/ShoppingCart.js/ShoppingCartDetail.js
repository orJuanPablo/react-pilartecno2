import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import {
  deleteProduct,
  getAllCartProducts,
} from "../../app/services/productServices";

export const ShoppingCartDetail = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    getAllCartProducts()
      .then((productsFromDB) => {
        setProducts(productsFromDB);
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      const getTotalPrice = () => {
        const total = products?.reduce((totalPrice, currentProduct) => {
          return totalPrice + currentProduct.price;
        }, 0);
        setTotalPrice(total);
      };
      getTotalPrice();
    }
  }, [products]);
  const handleRemoveClick = (id) => {
    deleteProduct(id)
      .then(() => {
        getAllCartProducts().then((productsFromDB) => {
          setProducts(productsFromDB);
        });
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Borrar del Carrito</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>$ {product.price}</td>
              <td>
                <Button
                  onClick={() => handleRemoveClick(product.id)}
                  variant="danger"
                >
                  <FontAwesomeIcon icon={faBackspace} />
                </Button>
              </td>
            </tr>
          );
        })}
        <tr>
          <th>Total: $ {totalPrice}</th>
        </tr>
      </tbody>
    </Table>
  );
};
