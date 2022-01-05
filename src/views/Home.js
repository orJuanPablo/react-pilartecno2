import React from "react";
import { AlertProduct } from "../components/Products/AlertProduct";
import { ListProducts } from "../components/Products/ListProducts";

export const Home = ({ history }) => (
  <>
    <AlertProduct />
    <ListProducts history={history} />
  </>
);
