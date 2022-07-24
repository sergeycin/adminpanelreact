import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pagesSlice from "./slices/pagesSlice";
import FieldSlice from "./slices/FieldListSlice";
const rootReducer = combineReducers({
   pagesSlice,
   FieldSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']