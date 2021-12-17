import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export const HeaderApp = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container fluid="md">
        <Navbar.Brand href="#home">Venta de Autos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Carrito</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
