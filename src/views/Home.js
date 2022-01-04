import React from "react";
import { Col, Row } from "react-bootstrap";
import { AlertProduct } from "../components/Products/AlertProduct";
import { ListProducts } from "../components/Products/ListProducts";

export const Home = () => (
  <Col xs={10}>
    <Row>
      <AlertProduct />
    </Row>
    <ListProducts />
  </Col>
);
