import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      Title : "",
      Display : false
    }
]
export const productSlice = createSlice({
    name : "Product",
    initialState,
    reducers : {
showModel(state , action){
    state.push(action.payload)
},
hideModel (state ){
    state.pop()
}
    }
})

export const {showModel,hideModel} = productSlice.actions
export default productSlice.reducer