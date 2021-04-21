import React from "react";
import { Link } from "react-router-dom";

// import "./CreateGoods.css";

function CreateGoods() {
  return (
    <div className="container">
      <div className="row header">
        <h1>HÀNG HÓA &nbsp;</h1>
        <h3>Fill out the form below to learn more!</h3>
      </div>
      <form action="#">
        <ul>
          <li>
            <p>
              <label>Ma Hang Hoa</label>
              <input type="text" name="mahanghoa" placeholder="HH001" />
            </p>
            <p>
              <label>Ten Hang Hoa</label>
              <input type="text" name="tenhanghoa" placeholder="Coffee" />
            </p>
            <p>
              <label>Nhom Hang Hoa</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </p>
            <p>
              <label>Gia Nhap</label>
              <input type="text" name="donvitinh" placeholder="30,000" />
            </p>
          </li>
          <li>
            <input className="btn btn-submit" type="submit" value="Submit" />
            <small>
              or press <strong>enter</strong>
            </small>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreateGoods;
