import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name : "search",
    initialState:{
        value : "Tarak Mehta"
    },
    reducers:{
        addSearch(state , action) {
            state.value = action.payload
        }
    }
})
export default searchSlice.reducer
export const {addSearch} = searchSlice.actions