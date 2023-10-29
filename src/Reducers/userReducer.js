import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"Not Set",
    profilePicture:"FaUser",
}

const userSlice = createSlice(
    {
        name:"user",
        initialState,
        reducers:{}
    }
)

export default userSlice.reducer;
