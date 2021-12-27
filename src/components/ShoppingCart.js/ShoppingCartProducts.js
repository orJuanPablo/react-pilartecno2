import { getByTitle } from "@testing-library/react";
import React from "react";
import { Dropdown } from "react-bootstrap";

export const ShoppingCartProducts = ({ item }) => {
  const { title, price, category } = item;
  return (
    <>
      <Dropdown.Menu>
        <Dropdown.Item>
          {title}-{category}-$ {price}
        </Dropdown.Item>
      </Dropdown.Menu>
    </>
  );
};
