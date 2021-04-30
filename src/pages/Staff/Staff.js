import React, { useState, useEffect } from "react";
import axios from "../../api/axiosClient";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "../../components/Header/Header";
import Paginate from "../../components/Pagination/Paginate";
import { useHistory } from "react-router-dom";

function Staff() {
  let history = useHistory();

  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [staffPerpage, sestStaffPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const staffData = await axios.get("/staff/all");
      // console.log(resp.data);
      setStaffs(staffData.data);
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
    axios.delete(`/staff/${id}`).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Header title="NHÂN VIÊN" link="/staff/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>NAME STAFF</th>
            <th>DATE OF BIRTH</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>TIMEWORK</th>
            <th>POSITION</th>
            <th>SALARY</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {currentStaff.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.fullname}</td>
              <td>{staff.datebirth}</td>
              <td>{staff.phone}</td>
              <td>{staff.address}</td>
              <td>{staff.shift.timework}</td>
              <td>{staff.position.salary}</td>
              <td>{staff.position.poname}</td>
              <td className="update">
                <button
                  className="button-edit"
                  onClick={() => history.push(`/staff/${staff.id}`)}
                >
                  <EditIcon />
                </button>
                <button
                  className="button-delete"
                  onClick={() => deleteStaff(staff.id)}
                >
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
