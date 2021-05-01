import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";
import "./ReceiptDetail.css";

function ReceiptDetail() {
  let { id } = useParams();
  const [receiptDetail, setReceiptDetail] = useState([]);

  useEffect(() => {
    function fetchDetail() {
      axiosClient.get(`/receipt/${id}/all`).then((data) => {
        if (data.data) {
          setReceiptDetail(data.data);
        }
      });
    }
    fetchDetail();
  }, [receiptDetail]);
  return (
    <div className="receipt__detail">
      <Header title="DETAIL" link="/receipt/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>MATERIAL NAME</th>
            <th>UNIT</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {receiptDetail.map((item) => (
            <tr key={item.id}>
              <td>{item.material.materialname}</td>
              <td>{item.material.unit}</td>
              <td>{item.material.quantity}</td>
              <td>{item.material.unitprice}</td>
              <td>{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReceiptDetail;
