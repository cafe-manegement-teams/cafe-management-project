import React from "react";
import "./StaffCreate.css";

function StaffCreate() {
  return (
    <div className="container">
      <div className="row header">
        <h1>NHÂN VIÊN &nbsp;</h1>
        <h3>Fill out the form below to learn more!</h3>
      </div>
      <form action="#">
        <ul>
          <li>
            <p>
              <label htmlFor="first_name">Ma Nhan Vien</label>
              <input type="text" name="manhanvien" placeholder="001" />
            </p>
            <p>
              <label htmlFor="last_name">Ten Nhan Vien</label>
              <input type="text" name="tennhanvien" placeholder="Smith" />
            </p>
            <p>
              <label htmlFor="last_name">Dia Chi</label>
              <input
                type="text"
                name="diachi"
                placeholder="341 Cao Dat p1 Q5"
              />
            </p>
            <p>
              <label htmlFor="last_name">Salary</label>
              <input type="text" name="salary" placeholder="3000" />
            </p>
          </li>
          <li>
            <p>
              <label htmlFor="phone">
                phone <span className="req">*</span>
              </label>
              <input type="text" name="phone" placeholder="0913234566" />
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

export default StaffCreate;
