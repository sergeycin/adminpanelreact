import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface PagesState{
    loading: boolean,
    error: string,
    response: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    response: ''

}



export const testDriveSLice = createSlice({
    name: 'testdrive',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<string>){
            state.loading = false
            state.response = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default testDriveSLice.reducer


