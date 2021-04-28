import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";
import DeleteIcon from "@material-ui/icons/Delete";
import DnsIcon from "@material-ui/icons/Dns";
import "./ListBill.css";
import { useHistory } from "react-router-dom";

function ListBill() {
  let history = useHistory();

  const [bill, setBill] = useState([]);

  useEffect(() => {
    async function fetchBill() {
      let bill = await axiosClient.get("/order/all");

      console.log(bill.data);
      if (bill.data) {
        setBill(bill.data);
      }
    }
    fetchBill();
  }, [bill]);

  const deleteBill = async (id) => {
    let deleteBill = await axiosClient.delete(`/order/${id}/delete`);
    if (deleteBill.data) {
      alert("Delete successfull!");
      window.location.reload();
    }
  };

  return (
    <div className="list__bill">
      <Header title="Bill Order" />
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>STATUS</th>
            <th>INFOR</th>
          </tr>
        </thead>
        <tbody>
          {bill.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.create_at}</td>
              <td>{item.total}</td>
              <td>{item.status}</td>
              <td>
                <button
                  className="button-edit"
                  onClick={() => history.push(`/bill/detail/${item.id}`)}
                >
                  <DnsIcon />
                </button>
                <button
                  className="button-delete"
                  onClick={() => deleteBill(item.id)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListBill;
