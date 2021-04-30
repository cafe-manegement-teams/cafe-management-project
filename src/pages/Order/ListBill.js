import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";
import DeleteIcon from "@material-ui/icons/Delete";
import DnsIcon from "@material-ui/icons/Dns";
import "./ListBill.css";
import { useHistory } from "react-router-dom";
import Paginate from "../../components/Pagination/Paginate";

function ListBill() {
  let history = useHistory();

  const [bill, setBill] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [billPerPage, setBillPerPage] = useState(10);

  useEffect(() => {
    async function fetchBill() {
      let bill = await axiosClient.get("/order/all");

      console.log(bill.data);
      if (bill.data) {
        setBill(bill.data);
      }
    }
    fetchBill();
  }, []);

  // get current page
  const indexOfLastBill = currentPage * billPerPage;
  const indexOfFirstBill = indexOfLastBill - billPerPage;
  const currentBill = bill.slice(indexOfFirstBill, indexOfLastBill);

  const deleteBill = async (id) => {
    let deleteBill = await axiosClient.delete(`/order/${id}/delete`);
    if (deleteBill.data) {
      alert("Delete successfull!");
      window.location.reload();
    }
  };

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="list__bill">
      <Header title="Bill Order" link="/sale" />
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
          {currentBill.map((item) => (
            <tr key={item.id}>
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
      <Paginate
        goodsPerPage={billPerPage}
        totalGoods={bill.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListBill;
