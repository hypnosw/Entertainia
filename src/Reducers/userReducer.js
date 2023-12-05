import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Unknown User",
  nickname:"Stranger",
  profilePicture: "FaUser",
  personalBio: `Tell us more about you!`,
  password: "",
  // posts should contain an array of the IDs of the posts that belong to this user
  posts: ["656c5b5b035441ec4b753a4f"],
  // user ID in the following array
  following: [1, 2, 3],
  followingCount:0,
  // user ID in the followers array
  followers: [1, 2, 3, 4],
  followersCount:0,
  role: "ADMIN",
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
    emptyUser:(state)=>{

      state.user = { ...initialState.user };
    }
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
