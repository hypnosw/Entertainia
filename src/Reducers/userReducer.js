import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  nickname:"",
  profilePicture: "",
  personalBio: ``,
  password: "",
  // posts should contain an array of the IDs of the posts that belong to this user
  posts: [],
  // user ID in the following array
  following: [],
  followingCount:0,
  // user ID in the followers array
  followers: [],
  followersCount:0,
  role: "USER",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(action);
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
      state.profilePicture = action.payload.profilePicture;
      state.personalBio = action.payload.personalBio;
      state.password = action.payload.password;
      state.posts = action.payload.posts;
      state.following = action.payload.following;
      state.followingCount = action.payload.followingCount;
      state.followersCount = action.payload.followersCount;
      state.followers = action.payload.followers;
      state.role = action.payload.role;

    },
    emptyUser: (state) => {
      // Reset the state to the initial state
      Object.assign(state, initialState);
    },
  },
});

export default userSlice.reducer;
export const { setUser, emptyUser } = userSlice.actions;
