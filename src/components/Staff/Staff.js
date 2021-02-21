import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import StaffData from "../../data/StaffData";
import Paginate from "../Pagination/Paginate";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [staffPerpage, sestStaffPerPage] = useState(10);

  useEffect(() => {
    setStaffs(StaffData);
  }, []);

  // get current page
  const indexOfLastStaff = currentPage * staffPerpage;
  const indexOfFirstStaff = indexOfLastStaff - staffPerpage;
  const currentStaff = staffs.slice(indexOfFirstStaff, indexOfLastStaff);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header title="NHÂN VIÊN" link="/staff/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>MA NHAN VIEN</th>
            <th>TEN NHAN VIEN</th>
            <th>DIA CHI</th>
            <th>LUONG</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {currentStaff.map((staff) => (
            <tr>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.address}</td>
              <td>{staff.salary}</td>
              <td>
                <button className="button-edit">
                  <EditIcon />
                </button>
                <button className="button-delete">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginate
        goodsPerPage={staffPerpage}
        totalGoods={staffs.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Staff;
