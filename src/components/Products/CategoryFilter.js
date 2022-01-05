import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { getAllCategories } from "../../app/services/productServices";

export const CategoryFilter = ({ history }) => {
  const [filters, setFilters] = useState(null);
  useEffect(() => {
    getAllCategories().then((data) => setFilters(data));
  }, []);
  const handleClickFilter = (filter) => {
    history.push(`/category/${filter}`);
  };
  return (
    <DropdownButton id="dropdown-basic-button" title="Categorias">
      <Dropdown.Item onClick={() => history.push("/")}>
        Todas Las categorías
      </Dropdown.Item>
      {filters?.map((filter, index) => {
        return (
          <Dropdown.Item key={index} onClick={() => handleClickFilter(filter)}>
            {filter}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
