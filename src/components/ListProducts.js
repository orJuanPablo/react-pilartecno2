import React from "react";
import { Row } from "react-bootstrap";
import json from "../example/MOCK_DATA.json";
import { Product } from "./ProductDetail";

export const ListProducts = () => {
  const products = json;

  return (
    <Row>
      {products.map((product, index) => (
        <Product key={index} item={product} />
      ))}
    </Row>
  );
};
