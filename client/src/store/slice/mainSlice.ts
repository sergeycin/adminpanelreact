import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface PagesState{
    loading: boolean,
    error: string,
    main: any[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    main: []

}



export const mainSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<any[]>){
            state.loading = false
            state.main = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default mainSlice.reducer


