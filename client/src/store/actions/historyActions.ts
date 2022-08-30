
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hook"
import { historySLice } from "../slice/historySlice"



export const getAboutAutoSalon= () => {
    const {fetching,fetchSuccessSalon,fetchError} =  historySLice.actions
   
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/history/autosalon','GET')
          
            dispatch(fetchSuccessSalon(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}



export const getAboutMark= () => {
    const {fetching,fetchSuccessMark,fetchError} =  historySLice.actions
   
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/history/mark','GET')
          
            dispatch(fetchSuccessMark(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}