import React from "react";
import "./index.css";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="top-section">
          <button className="post-button">POST</button>
        </div>
        <div className="middle-section">
          <ul className="sidebar-list">
            <li className="sidebar-item">HOME</li>
            <li className="sidebar-item">FOLLOWING</li>
            <li className="sidebar-item">MESSAGES</li>
            <li className="sidebar-item">NOTIFICATIONS</li>
            <li className="sidebar-item">LISTS</li>
          </ul>
        </div>
        <div className="bottom-section">
          <ul className="sidebar-list">
            <li className="sidebar-item">Help</li>
            <li className="sidebar-item">Settings</li>
          </ul>
        </div>
      </div>
    );
  };

export default Sidebar;