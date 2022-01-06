import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../app/services/productServices";
import {
  allProducts,
  filterByCategory,
} from "../../redux/actions/products/productsAction";

export const CategoryFilter = ({ history }) => {
  const dispatcher = useDispatch();

  const [filters, setFilters] = useState(null);
  useEffect(() => {
    getAllCategories().then((data) => setFilters(data));
  }, []);
  const handleClickFilter = (filter) => {
    //history.push(`/category/${filter}`);
    dispatcher(filterByCategory(filter));
  };
  return (
    <DropdownButton id="dropdown-basic-button" title="Categorias">
      <Dropdown.Item onClick={() => dispatcher(filterByCategory(""))}>
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
