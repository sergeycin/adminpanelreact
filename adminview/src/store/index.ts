import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { authReducer} from './reducers/authReducer';
import thunk from "redux-thunk"


import { TypedUseSelectorHook, useSelector} from 'react-redux';

export  const rootReducer = combineReducers({
    userReducer: authReducer
   
})
  /*Хук для использования данных в useSelector */
  type RootState = ReturnType<typeof rootReducer>
  export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
  /*end */

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));