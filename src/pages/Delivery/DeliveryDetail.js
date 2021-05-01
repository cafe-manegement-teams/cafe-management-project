import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";

function DeliveryDetail() {
  let { id } = useParams();
  const [deliveryDetail, setDeliveryDetail] = useState([]);

  useEffect(() => {
    function fetchDetail() {
      axiosClient.get(`/delivery/${id}/all`).then((data) => {
        if (data.data) {
          setDeliveryDetail(data.data);
        }
      });
    }
    fetchDetail();
  }, [deliveryDetail]);
  return (
    <div className="receipt__detail">
      <Header title="DETAIL" link="/delivery/create" />
      {/* table data */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>MATERIAL NAME</th>
            <th>UNIT</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          {deliveryDetail.map((item) => (
            <tr key={item.id}>
              <td>{item.material.materialname}</td>
              <td>{item.material.unit}</td>
              <td>{item.material.quantity}</td>
              <td>{item.material.unitprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryDetail;
