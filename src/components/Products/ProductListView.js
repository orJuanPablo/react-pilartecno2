import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../assets/css/style.css";


export const Product = ({ item }) => {
  const { model, make, year, image, price } = item;
  return (
    <Col xs={3} style={{margin: '15px'}}>
      <Row>
        <Col xs={8}>
          <h5 className="text-primary">
            {model}-{year}<br/>
            <b>{make}</b>
          </h5>
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
