import { combineReducers } from "redux";
import { productsReducer } from "./Products/productsReducer";

const initialState = {};
const rootReducer = (state = initialState, action) => {
  return state;
};
export default combineReducers({
  rootReducer,
  productsReducer,
});
