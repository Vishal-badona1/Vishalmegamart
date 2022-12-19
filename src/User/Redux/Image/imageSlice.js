import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { image : "" ,
     visibl : false
    }
]
export const imageSlice = createSlice({
    name : "image",
    initialState,
   reducers:{ 
getImage(state , action) {
  state.push(action.payload)
},
popImage(state , action){
state.pop(action.payload)
}
    }

})
export default imageSlice.reducer
export const {getImage,popImage} = imageSlice.actions