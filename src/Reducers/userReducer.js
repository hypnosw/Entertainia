import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  nickname: "",
  profilePicture: "",
  personalBio: ``,
  password: "",
  _id: "",
  // posts should contain an array of the IDs of the posts that belong to this user
  posts: [],
  // user ID in the following array
  following: [],
  followingCount: 0,
  // user ID in the followers array
  followers: [],
  likedPosts: [],
  followersCount: 0,
  employeeID: 0,
  enterpriseName: "",
  role: "USER",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(action);
      state.username = action.payload.username;
      state._id = action.payload._id;
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
      state.employeeID = action.payload.employeeID;
      state.enterpriseName = action.payload.enterpriseName;
      state.likedPosts = action.payload.likedPosts;
    },
    emptyUser: (state) => {
      // Reset the state to the initial state
      Object.assign(state, initialState);
    },
  },
});

export default userSlice.reducer;
export const { setUser, emptyUser } = userSlice.actions;
