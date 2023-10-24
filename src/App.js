import "./App.css";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="SignUp" />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
