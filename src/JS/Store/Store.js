import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import RootReducer from "../Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
