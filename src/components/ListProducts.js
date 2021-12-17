import React from "react";
import { Row } from "react-bootstrap";
import json from "../example/MOCK_DATA.json";
import { Product } from "./ProductListView";
const styles = {
  margin: "2vh",
  paddingTop: "5vh",
};
export const ListProducts = () => {
  const products = json;

  return (
    <Row style={styles}>
      {products.map((product, index) => (
        <Product key={index} item={product} />
      ))}
    </Row>
  );
};
