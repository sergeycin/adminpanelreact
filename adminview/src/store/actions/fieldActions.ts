
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { FieldSLice } from "../slices/FieldListSlice"



export const fieldList= () => {
    const {fetching,fetchSuccess,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching)
            const data = await makeRequest('/api/pages/all','GET')
            console.log('data',data)
            dispatch(fetchSuccess(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}