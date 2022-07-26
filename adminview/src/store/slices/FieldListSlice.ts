import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface PagesState{
    loading: boolean,
    error: string,
   fields: any[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    fields: []

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
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default FieldSLice.reducer


