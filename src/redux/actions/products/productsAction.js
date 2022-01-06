import { getAllProducts } from "../../../app/services/productServices";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
//! Action Creator
const getAllProductsAction = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
});
const filterProducts = (products) => ({
  type: FILTER_PRODUCTS,
  payload: products,
});
//! Async actions
export const allProducts = () => {
  return async (dispatch) => {
    try {
      const products = await getAllProducts();
      dispatch(getAllProductsAction(products));
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const filterByCategory = (category) => {
  return (dispatch, getState) => {
    const state = getState();
    const filtered = state.productsReducer.products.filter(
      (product) => product.category === category
    );
    dispatch(filterProducts(filtered));
  };
};
