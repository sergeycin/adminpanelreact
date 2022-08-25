import { makeRequest } from "../../hooks/fetch.hook"

import { AppDispatch } from ".."

import  { mainSlice } from "../slice/mainSlice"

export const getMain = (form?: any) => {
    const {fetching,fetchSuccess,fetchError} =  mainSlice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/main/','GET')
            console.log(data)
           dispatch( fetchSuccess(data))
        }
        catch (e){
            console.log(e)
            dispatch(fetchError(e as Error))
        }
    }
}

