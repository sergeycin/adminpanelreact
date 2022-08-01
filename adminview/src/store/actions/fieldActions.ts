
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { FieldSLice } from "../slices/FieldListSlice"

interface formModel {
    model: string | undefined
}

export const fieldList= (form: formModel) => {
    const {fetching,fetchSuccess,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/pages/modelList','POST',{...form})
           
            dispatch(fetchSuccess(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}


export const deleteField = (idField: string) => {
    const {fetching,fetchSuccessDelete,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/pages/modelList','POST',idField)
            console.log(data)
            dispatch(fetchSuccessDelete())
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}