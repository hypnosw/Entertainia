import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"Unknown User",
    profilePicture:"FaUser",
    personalBio:"Tell us more about you!",
    password:"",
    // user ID in the following array
    following:[1,2,3],
    // user ID in the followers array
    followers:[1,2,3,4],
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
