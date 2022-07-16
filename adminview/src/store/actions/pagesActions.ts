import { Dispatch } from "@reduxjs/toolkit"
import { makeRequest } from "../../hooks/fetch.hooks"

export const fetchPages = () => {
    return async (dispatch:Dispatch) =>{
        try{
            const data = await makeRequest('/api/components','GET ')
            console.log(data)
        
        }
        catch (e){

        }
    }
}