import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pagesSlice from "./slices/pagesSlice";
const rootReducer = combineReducers({
    pages: pagesSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}