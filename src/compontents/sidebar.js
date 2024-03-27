import React from "react";
import Logo from "../assets/logo.png";
import Setting from "../assets/Frame.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <ul className="sidebar-list">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction</Link>
          </li>
        </ul>
        <div className="settings-header">
          <p>
            <img src={Setting} alt="settings icons" />
            <span>Settings</span>
          </p>
        </div>
      </div>
    </div>
  );
}
