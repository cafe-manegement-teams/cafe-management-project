import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";

function StaffDetail() {
  let { staffId } = useParams();

  const [staffInfor, setStaffInfor] = useState([]);

  useEffect(() => {
    function fetchStaff() {
      axiosClient.get(`/staff/${staffId}`).then((data) => {
        if (data.data) {
          console.log(data.data);
          setStaffInfor(data.data);
        }
      });
    }
    fetchStaff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(staffInfor);
  return (
    <div className="staff">
      <Header title="DETAIL" link="/staff/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>POSITIONNAME</th>
            <th>SAlARY</th>
            <th>TIMEWORK</th>
            <th>HOURCOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{staffInfor.position.poname}</td>
            <td>{staffInfor.position.salary}</td> */}
            <td>{staffInfor.shift.timework}</td>
            <td>{staffInfor.shift.hourcount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StaffDetail;
