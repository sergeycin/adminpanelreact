import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import newsSlice from "./slice/newsSlice";
import contactSlice from "./slice/contactSlice";
import modelsSlice from "./slice/modelsSlice";
const rootReducer = combineReducers({
    newsSlice,
    contactSlice,
    modelsSlice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']