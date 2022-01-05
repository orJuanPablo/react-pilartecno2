import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { getAllCategories } from "../../app/services/productServices";

export const CategoryFilter = () => {
  const [filters, setFilters] = useState(null);
  useEffect(() => {
    getAllCategories().then((data) => setFilters(data));
  }, []);
  return (
    <DropdownButton id="dropdown-basic-button" title="Categorias">
      <Dropdown.Item>Todas Las categorías</Dropdown.Item>
      {filters?.map((filter, index) => {
        return <Dropdown.Item key={index}>{filter}</Dropdown.Item>;
      })}
    </DropdownButton>
  );
};
