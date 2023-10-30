import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"Unknown",
    profilePicture:"FaUser",
    personalBio:"Tell us more about you!",
    password:"",
    loggedIn: false,
}

const userSlice = createSlice(
    {
        name:"user",
        initialState,
        reducers:{}
    }
)

export default userSlice.reducer;
