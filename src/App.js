import "./App.css";
import React from "react";
import { HashRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import SignUp from "./Components/SignUp";
import ProfileSetting from "./Components/Profile-Setting";
import HeadBar from "./Components/HeadBar";
import SideBar from "./Components/SideBar";
import LogIn from "./Components/LogIn";
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./Components/UserProfile";
import CreatePost from "./Components/CreatePost";
import Homepage from "./Components/HomePage";
import PostDetail from "./Components/PostDetail";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <HashRouter className="app-page">
      <Provider store={store}>
        <div className="row">
          <HeadBar />
        </div>
        <div className="row">
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route
              path="/profile/profile-setting"
              element={<ProfileSetting />}
            />
            <Route path="/profile/*" element={<UserProfile />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/PostDetail" element={<PostDetail />} />
            <Route path={"/search/*"} element={<SearchResults />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
