import React from "react";
import { Col, Row } from "react-bootstrap";
import json from "../example/MOCK_DATA.json";
import { CardProduct } from "./CardProduct";
const styles = {
  margin: "2vh",
  paddingTop: "5vh",
};
export const ListProducts = () => {
  const products = json.products;

  return (
    <Col xs={10} >
      <Row style={styles}>
        {products.map((product, index) => (
          <CardProduct key={index} item={product} />
        ))}
      </Row>
    </Col>
  );
};
