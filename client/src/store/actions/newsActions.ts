import { makeRequest } from "../../hooks/fetch.hook"

import { AppDispatch } from ".."

import  { newsSLice } from "../slice/newsSlice"

export const getNews = (form?: any) => {
    const {fetching,fetchSuccess,fetchError} =  newsSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/news/ru','GET')
          
            dispatch(fetchSuccess(data))
        }
        catch (e){
            console.log(e)
            dispatch(fetchError(e as Error))
        }
    }
}

