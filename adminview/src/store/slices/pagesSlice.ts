import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Ipages {
    Page :  string[],
    Forms: string[]
}

interface PagesState{
    loading: boolean,
    error: string,
    pages: {
        Page :  string[],
    Forms: string[]
    }
}

const initialState: PagesState = {
    loading: false,
    error: '',
    pages: {
        Page: [],
        Forms: []
    }

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
        fetchSuccess(state,action: PayloadAction<Ipages>){
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


