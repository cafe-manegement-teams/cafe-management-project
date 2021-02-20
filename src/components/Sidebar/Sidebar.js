import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <h2>Cafe Management System</h2>
      </Link>

      {SidebarData.map((val, key) => {
        return (
          <Link
            to={val.link}
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => (window.location.pathname = val.link)}
            key={val.title}
          >
            <div className="sidebarItem">
              <div className="sidebarItem__icon">{val.icon}</div>
              <p className="sidebarItem__title">{val.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
