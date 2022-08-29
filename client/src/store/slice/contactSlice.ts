import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface PagesState{
    loading: boolean,
    error: string,
   fields: any[]
   message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    fields: [],
    message: ''

}





export const ContactsSLice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<any[]>){
            state.loading = false
            state.fields = action.payload
        },
       
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default ContactsSLice.reducer


