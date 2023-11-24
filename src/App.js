import "./App.css";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import SignUp from "./Components/SignUp";
import ProfileSetting from "./Components/Profile-Setting";
import Home from "./Home";
import HeadBar from "./Components/HeadBar";
import SideBar from "./Components/SideBar";
import LogIn from "./Components/LogIn";
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./Components/UserProfile";
import CreatePost from "./Components/CreatePost";
import Homepage from "./Components/HomePage";
import PostDetail from "./Components/PostDetail";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/HeadBar" element={<HeadBar />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/PostDetail" element={<PostDetail />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
