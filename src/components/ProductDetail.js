import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../assets/css/style.css";

const styles = {
  fontSize: "15px",
};

export const Product = ({ item }) => {
  const { model, make, year, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles}>
            {model}-{year}<br/>
            <b>{make}</b>
          </div>
        </Col>
        <Col xs={4}>
          <Button variant="primary">
            Precio <Badge bg="secondary">$ {Math.ceil(price / 1000)}k</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
