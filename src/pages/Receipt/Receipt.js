import React from "react";
import Header from "../../components/Header/Header";
import DeleteIcon from "@material-ui/icons/Delete";
import DnsIcon from "@material-ui/icons/Dns";

function Receipt() {
  return (
    <div>
      <Header title="PHIẾU NHẬP" link="/receipt/create" />

      {/* table data */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>INFOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="button-edit">
                <DnsIcon />
              </button>
              <button className="button-delete">
                <DeleteIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Receipt;
