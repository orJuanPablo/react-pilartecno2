import React from "react";
import { Dropdown } from "react-bootstrap";

export const ShoppingCart = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
       Shopping Cart
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
