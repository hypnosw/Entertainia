import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userReducer";

const store = configureStore({
  reducer: {
    userReducer,
  },
});
export default store;
