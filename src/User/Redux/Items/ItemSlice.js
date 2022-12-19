import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
    name : "items",
    initialState : [],
    reducers : {
        addCategory (state,action){
            state.push(action.payload)
        }
    }
})

export const {addCategory} = ItemSlice.actions
export default ItemSlice.reducer