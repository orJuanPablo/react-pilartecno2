import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ShoppingCartDetail } from "../components/ShoppingCart.js/ShoppingCartDetail";

export const ShoppingCartView = ({ history }) => {
  const handleCancelButton = () => {
    history.push("/");
  };
  return (
    <Container>
      <ShoppingCartDetail />
      <Row>
        <Col xs={6}>
          <Button variant="danger" onClick={handleCancelButton}>
            Cancelar
          </Button>
        </Col>
        <Col xs={6}>
          <Button>Comprar</Button>
        </Col>
      </Row>
    </Container>
  );
};
