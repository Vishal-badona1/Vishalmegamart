import { createSlice } from "@reduxjs/toolkit";

const viewProduct = createSlice({
    name : "View",
initialState : {
    Display : false
},
reducers : {
    ShowProduct (state,action) {
        state.Display = true
    },
    HideProduct(state,action){
        state.Display = false
    }
}
})

export const {ShowProduct , HideProduct} = viewProduct.actions
export default viewProduct.reducer