import React from "react";
import { AlertProduct } from "../components/Products/AlertProduct";
import { FilteredProducts } from "../components/Products/FilteredProducts";

export const FilteredProductsView = ({match, history}) => (
  <>
    <AlertProduct />
    {/* <FilteredProducts match={match} history={history}/> */}
  </>
);
