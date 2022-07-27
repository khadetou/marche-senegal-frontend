import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./products/productSlice";
import AuthReducer from "./auth/index";
const reducers = combineReducers({
  products: ProductReducer,
  auth: AuthReducer,
});

export default reducers;
