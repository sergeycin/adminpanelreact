import { makeRequest } from "../../hooks/fetch.hook"

import { AppDispatch } from ".."

import  { mainSlice } from "../slice/mainSlice"

export const getContacts = (form?: any) => {
    const {fetching,fetchMainSuccess,fetchError} =  mainSlice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/contacts/','GET')
            console.log(data)
            
                dispatch( fetchMainSuccess(data))
          
          
        }
        catch (e){
            console.log(e)
            dispatch(fetchError(e as Error))
        }
    }
}

