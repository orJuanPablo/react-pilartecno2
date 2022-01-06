import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AlertProduct } from "../components/Products/AlertProduct";
import { ListProducts } from "../components/Products/ListProducts";
import { allProducts } from "../redux/actions/products/productsAction";

export const Home = ({ history }) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(allProducts());
  }, []);
  return (
    <>
      <AlertProduct />
      <ListProducts history={history} />
    </>
  );
};
