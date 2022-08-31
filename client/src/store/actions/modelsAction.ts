
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hook"
import { modelsSLice } from "../slice/modelsSlice"


export const getModels= () => {
    const {fetching,fetchSuccess,fetchError} =  modelsSLice.actions
   
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/models/','GET')

         
            dispatch(fetchSuccess(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}



export const getTypes= () => {
    const {fetching,fetchSuccessTypes,fetchError} =  modelsSLice.actions
   
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/models/types','GET')

         
            dispatch(fetchSuccessTypes(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}