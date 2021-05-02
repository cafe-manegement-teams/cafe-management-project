import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DeleteIcon from "@material-ui/icons/Delete";
import DnsIcon from "@material-ui/icons/Dns";
import axiosClient from "../../api/axiosClient";
import "./Receipt.css";
import Paginate from "../../components/Pagination/Paginate";
import { useHistory } from "react-router-dom";

function Receipt() {
  let history = useHistory();
  const [receipt, setReceipt] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [receiptPerPage, setReceiptPerPage] = useState(10);

  useEffect(() => {
    function fetchReceipt() {
      axiosClient.get("/receipt/all").then((data) => {
        if (data.data) {
          setReceipt(data.data);
        }
      });
    }
    fetchReceipt();
  }, [receipt]);

  const indexOfLastReceipt = currentPage * receiptPerPage;
  const indexOfFirstReceipt = indexOfLastReceipt - receiptPerPage;
  const currentGoods = receipt.slice(indexOfFirstReceipt, indexOfLastReceipt);

  const deleteReceipt = (id) => {
    axiosClient.delete(`/receipt/${id}/delete`).then(() => {
      window.location.reload();
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="list__receipt">
      <Header title="RECEIPT" link="/receipt/create" />
      {/* table data */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>INFOR</th>
          </tr>
        </thead>
        <tbody>
          {currentGoods &&
            currentGoods.map((item) => (
              <tr key={item.id}>
                <td>{item.create_at}</td>
                <td>{item.status}</td>
                <td>{item.total}</td>
                <td className="update">
                  <button
                    className="button-edit"
                    onClick={() => history.push(`/receipt/${item.id}`)}
                  >
                    <DnsIcon />
                  </button>
                  <button
                    className="button-delete"
                    onClick={() => deleteReceipt(item.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginate
        goodsPerPage={receiptPerPage}
        totalGoods={receipt.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Receipt;
