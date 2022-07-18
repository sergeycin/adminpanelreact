import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pagesSlice from "./slices/pagesSlice";
const rootReducer = combineReducers({
   pagesSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']