import React from "react";
import { Link } from "react-router-dom";

import "./CreateGoods.css";

function CreateGoods() {
  return (
    <form className="container">
      <div className="form-group">
        <label>Ma Hang Hoa</label>
        <input type="text" className="form-control" id="mahanghoa" />
      </div>
      <div className="form-group">
        <label>Ten Hang Hoa</label>
        <input type="text" className="form-control" id="tenhanghoa" />
      </div>
      <div className="form-group">
        <label>Gia</label>
        <input type="text" className="form-control" id="gia" />
      </div>
      <div className="form-group">
        <label>Don Vi Tinh</label>
        <input type="text" className="form-control" id="donvitinh" />
      </div>
    </form>
  );
}

export default CreateGoods;
