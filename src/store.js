import { configureStore } from "@reduxjs/toolkit";
import { productreducers } from "./redux/slice/productslice";

export const store = configureStore({
 reducer:{
product:productreducers
 }
});
