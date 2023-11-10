import React from "react";
import "./index.css";
import { FaHome, FaUserFriends, FaEnvelope, FaBell, FaList } from 'react-icons/fa';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="shared-parent-container">
        <div className="top-section">
          <button className="post-button">POST</button>
        </div></div>
        <div className="middle-section">
          <ul className="sidebar-list">
          <li className="sidebar-item"><FaHome /> HOME</li>
          <li className="sidebar-item"><FaUserFriends /> FOLLOWING</li>
          <li className="sidebar-item"><FaEnvelope /> MESSAGES</li>
          <li className="sidebar-item"><FaBell /> NOTIFICATIONS</li>
          <li className="sidebar-item"><FaList /> LISTS</li>
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