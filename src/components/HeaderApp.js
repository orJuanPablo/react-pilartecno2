import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {FilterBar} from "./FilterBar"
import { ShoppingCart } from "./ShoppingCart.js/ShoppingCart";

export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container fluid="md">
          <Navbar.Brand href="#home">Mini E-comerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <ShoppingCart />
          </Nav>
        </Container>
      </Navbar>
     <FilterBar />
    </>
  );
};
