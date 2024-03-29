
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { FieldSLice } from "../slices/FieldListSlice"

interface formModel {
    model: string | undefined
}
interface deleteMode {
    _id: string | undefined
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


export const deleteField = (form: deleteMode) => {
    const {fetching,fetchSuccessJust,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/pages/deleteField','POST',{...form})
            console.log(data)
            dispatch(fetchSuccessJust())
        }
        catch (e){
            console.log(e)
            dispatch(fetchError(e as Error))
        }
    }
}



export const AddField = (form: any) => {
    const {fetching,fetchSuccessCreateField,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/pages/createField','POST',{...form})
            // console.log(data.message)
            dispatch(fetchSuccessCreateField(data.message))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}

export const uploadImage = (form: any) => {
    const {fetching,fetchSuccessJust,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            // dispatch(fetching()) 
            const data = await makeRequest('/api/pages/sendimage','POST',form)
            // console.log(data.message)
            // dispatch(fetchSuccessJust())
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}


