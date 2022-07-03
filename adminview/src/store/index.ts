import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer';
import thunk from "redux-thunk"


import { TypedUseSelectorHook, useSelector} from 'react-redux';

export  const rootReducer = combineReducers({
    userReducer: userReducer
   
})
  /*Хук для использования данных в useSelector */
  type RootState = ReturnType<typeof rootReducer>
  export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
  /*end */

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));