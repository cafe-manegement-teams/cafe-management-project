import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <div className="sidebar">
<<<<<<< HEAD
      <h2>Cafe </h2> <h2>Management System</h2>
=======
      <Link to="/">
        <h2>Cafe Management System</h2>
      </Link>
>>>>>>> 8406a3b18fbdfc3fec0f873f40cd0c4d06564ff3

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
