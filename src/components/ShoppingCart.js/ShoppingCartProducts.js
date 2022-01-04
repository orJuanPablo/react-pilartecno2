import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Dropdown } from "react-bootstrap";

export const ShoppingCartProducts = ({ item }) => {
  const { title, price, category } = item;
  const deleteFromCart = () => {};
  return (
    <>
      <Dropdown.Item className="col-11">
        <span>
          {title} - {category} - $ {price}
        </span>
      </Dropdown.Item>
      <Button variant="flat col-1" onClick={deleteFromCart}>
        <FontAwesomeIcon icon={faTimes} className="text-danger" />
      </Button>
    </>
  );
};
