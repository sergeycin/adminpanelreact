import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface PagesState{
    loading: boolean,
    error: string,
   fields: any[],
   message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    fields: [],
    message: ''

}

// interface AirportPayload {
//     pages: string[],
//     count: number
//   }
  


export const FieldSLice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<string[]>){
            state.loading = false
            state.fields = action.payload
        },
        fetchSuccessJust(state){
            state.loading = false 
        },
        fetchSuccessCreateField(state,action: PayloadAction<string>){
            state.loading = false 
            state.message = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default FieldSLice.reducer


