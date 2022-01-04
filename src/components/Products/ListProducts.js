import React from "react";
import { Col, Row } from "react-bootstrap";
import json from "../../example/MOCK_DATA.json";
import { CardProduct } from "./CardProduct";
const styles = {
  margin: "2vh",
  padding: ".5vh",
};
export const ListProducts = () => {
  const products = json.products;

  return (
    <Col xs={12}>
      <Row style={styles}>
        {products.map((product, index) => (
          <CardProduct key={index} item={product} />
        ))}
      </Row>
    </Col>
  );
};
