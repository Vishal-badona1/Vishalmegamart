import { createSlice } from "@reduxjs/toolkit";

export const Getuser = createSlice({
    name: "User",
    initialState: [{
        Name: "",
        Image: "",
        Username: "",
        Email: ""
    }],

    reducers: {
getuser (state,action) {
    state.push(action.payload)
}
    }
})

export const {getuser} = Getuser.actions
export default Getuser.reducer