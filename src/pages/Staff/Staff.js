import React, { useState, useEffect } from "react";
import axios from "../../api/axiosClient";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "../../components/Header/Header";
import Paginate from "../../components/Pagination/Paginate";

function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [staffPerpage, sestStaffPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("/staff");
      // console.log(resp.data);
      setStaffs(resp.data);
    }
    fetchData();
  }, []);

  // get current page
  const indexOfLastStaff = currentPage * staffPerpage;
  const indexOfFirstStaff = indexOfLastStaff - staffPerpage;
  const currentStaff = staffs.slice(indexOfFirstStaff, indexOfLastStaff);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteStaff = (id) => {
    const resp = axios.delete(`/staff?id=${id}`);
    console.log(resp.data);

    window.location.reload();
  };

  return (
    <div>
      <Header title="NHÂN VIÊN" link="/staff/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME STAFF</th>
            <th>ADDRESS</th>
            <th>Position</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {currentStaff.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.fullname}</td>
              <td>{staff.address}</td>
              <td>{staff.position}</td>
              <td>
                <button className="button-edit">
                  <EditIcon />
                </button>
                <button className="button-delete">
                  <DeleteIcon onClick={() => deleteStaff(staff.id)} />
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
