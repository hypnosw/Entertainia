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
          <Route path="/profile" element={<UserProfile/>}/>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
