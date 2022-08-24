import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import newsSlice from "./slice/newsSlice";
import mainSlice from "./slice/mainSlice";

const rootReducer = combineReducers({
    newsSlice,
    mainSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']