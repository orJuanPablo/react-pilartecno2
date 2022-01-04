import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FilterBar } from "./FilterBar";
import { ShoppingCart } from "./ShoppingCart.js/ShoppingCart";

export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container fluid="md">
          <Navbar.Brand>
            <Link className="link" to={"/"}>
             <FontAwesomeIcon icon={faStore}/> Mini E-comerce
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <ShoppingCart />
          </Nav>
        </Container>
      </Navbar>
      <FilterBar />
    </>
  );
};
