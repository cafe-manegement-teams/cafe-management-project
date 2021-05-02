import React from "react";
import { SidebarData } from "./SidebarData";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  let history = useHistory();

  return (
    <div className="sidebar">
      <h2 onClick={() => history.push("/")}>Cafe Management System</h2>

      {SidebarData.map((val) => {
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
