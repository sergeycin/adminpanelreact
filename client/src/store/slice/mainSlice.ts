import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface PagesState{
    loading: boolean,
    error: string,
    contactdata: any[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    contactdata: []

}



export  const   mainSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchMainSuccess(state,action: PayloadAction<any[]>){
            state.loading = false
            state.contactdata = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default mainSlice.reducer


