import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Unknown User",
  email: "",
  profilePicture: "FaUser",
  personalBio: "Tell us more about you!",
  password: "",
  // user ID in the following array
  following: [1, 2, 3],
  // user ID in the followers array
  followers: [1, 2, 3, 4],
  loggedIn: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePicture = action.payload.profilePicture;
      state.personalBio = action.payload.personalBio;
      state.password = action.payload.password;
      state.following = action.payload.following;
      state.followers = action.payload.followers;
      state.loggedIn = action.payload.loggedIn;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
