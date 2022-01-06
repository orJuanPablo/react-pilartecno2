import {
  FILTER_PRODUCTS,
  GET_ALL_PRODUCTS,
} from "../../actions/products/productsAction";

const initialState = {
  products: [],
  filter: '',
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: payload };
    case FILTER_PRODUCTS:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
