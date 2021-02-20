import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

function Header({ title, link }) {
  return (
    <div className="header">
      <div className="header__left">
        <h3>{title}</h3>
      </div>
      <div className="header__middle">
        <SearchIcon className="header__middle--icon" />
        <input placeholder="Search here" className="header__middle--input" />
      </div>
      <div className="header__right">
        <AddIcon className="header__right--icon" />
        <Link to={link}>
          <p>THÊM</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
