
import { makeRequest } from "../../hooks/fetch.hook"

import { AppDispatch } from ".."

import  { testDriveSLice } from "../slice/testDriveSlice"

export const AddUserTestDrive = (form: any) => {
    const {fetching,fetchSuccess,fetchError} =  testDriveSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching()) 
            const data = await makeRequest('/api/testdrive/','POST',{...form})
            console.log('data',data)
            dispatch(fetchSuccess(data.message))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}