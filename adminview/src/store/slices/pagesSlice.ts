import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PagesState{
    loading: boolean,
    error: string,
    pages: any[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    pages: []

}

interface AirportPayload {
    pages: string[],
    count: number
  }
  


export const pageSLice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<any[]>){
            state.loading = false
            state.pages = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default pageSLice.reducer


