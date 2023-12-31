import "./App.css";
import React from "react";
import { HashRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import SignUp from "./Components/SignUp";
import ProfileSetting from "./Components/Profile-Setting";
import HeadBar from "./Components/HeadBar";
import LogIn from "./Components/LogIn";
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./Components/UserProfile";
import CreatePost from "./Components/CreatePost";
import Homepage from "./Components/HomePage";
import PostDetail from "./Components/PostDetail";
import SearchResults from "./Components/SearchResults";
import Footer from "./Components/Footer";
import AllUsers from "./Components/AllUsers";

function App() {
  return (
    <HashRouter className="page-content">
      <Provider store={store}>
        <div className="row">
          <HeadBar />
        </div>
        <div className="row et-homepage-main">
          <Routes>
            <Route path={"/*"} element={<Homepage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/profile/profile-setting/:id" element={<ProfileSetting />}/>
            <Route path="/profile" element={<LogIn />} />

            <Route path="/profile/:id/" element={<UserProfile />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/PostDetail/:postId" element={<PostDetail />} />
            <Route path={"/search/*"} element={<SearchResults />} />
            <Route path="/profile/all-users" element={<AllUsers/>} />
          </Routes>
          <Footer />
        </div>

        <div></div>
      </Provider>
    </HashRouter>
  );
}

export default App;
