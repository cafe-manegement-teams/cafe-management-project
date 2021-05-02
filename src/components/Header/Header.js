import React from "react";
import "./Header.css";

import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

function Header({ title, link }) {
  let history = useHistory();
  return (
    <div className="header">
      <div className="header__left">
        <h3>{title}</h3>
      </div>
      <div className="header__middle">
        <SearchIcon className="header__middle--icon" />
        <input placeholder="Search here" className="header__middle--input" />
      </div>
      {link && (
        <div className="header__right" onClick={() => history.push(link)}>
          <AddIcon className="header__right--icon" />
        </div>
      )}
    </div>
  );
}

export default Header;
