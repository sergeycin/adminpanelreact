import { Dispatch } from "@reduxjs/toolkit"
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import pagesSlice, { pageSLice } from "../slices/pagesSlice"


export const fetchPages = () => {
    const {fetching} =  pageSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching)
            const data = await makeRequest('https://openexchangerates.org/api/latest.json?app_id=771a6bee690546a8829f7887b24585c9','GET')
            console.log('data',data)
        
        }
        catch (e){

        }
    }
}