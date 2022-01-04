import React from "react";
import {Dropdown } from "react-bootstrap";

export const ShoppingCartProducts = ({ item }) => {
  const { title, price, category } = item;
  return (
    <Dropdown.Item className="col-11">
      <span>
        {title} - {category} - $ {price}
      </span>
    </Dropdown.Item>
  );
};
