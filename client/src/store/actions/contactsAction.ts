
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hook"

import { ContactsSLice } from "../slice/contactSlice"


interface formModel {
    model: string | undefined
}
interface deleteMode {
    _id: string | undefined
}

export const fieldList= () => {
    const {fetching,fetchSuccess,fetchError} =  ContactsSLice.actions
   
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/contacts/','GET')

         
            dispatch(fetchSuccess(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}