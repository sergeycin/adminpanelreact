
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { pageSLice } from "../slices/pagesSlice"



export const fetchPages = () => {
    const {fetching,fetchSuccess,fetchError} =  pageSLice.actions
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