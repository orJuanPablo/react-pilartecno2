import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reucers/rootReduce";

const middlewares = [ThunkMiddleware].filter(Boolean);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
