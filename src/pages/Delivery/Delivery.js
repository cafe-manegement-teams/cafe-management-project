import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DeleteIcon from "@material-ui/icons/Delete";
import DnsIcon from "@material-ui/icons/Dns";
import { useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Paginate from "../../components/Pagination/Paginate";
import "./delivery.css";

function Delivery() {
  let history = useHistory();
  const [delivery, setDelivery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [deliveryPerPage, setReceiptPerPage] = useState(7);

  useEffect(() => {
    function fetchReceipt() {
      axiosClient.get("/delivery/all").then((data) => {
        if (data.data) {
          setDelivery(data.data);
        }
      });
    }
    fetchReceipt();
  }, [delivery]);

  const indexOfLastReceipt = currentPage * deliveryPerPage;
  const indexOfFirstReceipt = indexOfLastReceipt - deliveryPerPage;
  const currentDelivery = delivery.slice(
    indexOfFirstReceipt,
    indexOfLastReceipt
  );

  const deleteDelivery = (id) => {
    axiosClient.delete(`/delivery/${id}/delete`).then(() => {
      window.location.reload();
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="list__delivery">
      <Header title="DELIVERY" link="/delivery/create" />
      {/* table data */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>INFOR</th>
          </tr>
        </thead>
        <tbody>
          {currentDelivery &&
            currentDelivery.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.create_at}</td>
                <td>{item.status}</td>
                <td className="update">
                  <button
                    className="button-edit"
                    onClick={() => history.push(`/delivery/${item.id}`)}
                  >
                    <DnsIcon />
                  </button>
                  <button
                    className="button-delete"
                    onClick={() => deleteDelivery(item.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginate
        goodsPerPage={deliveryPerPage}
        totalGoods={delivery.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Delivery;
