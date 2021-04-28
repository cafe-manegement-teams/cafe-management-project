import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Header from "../../components/Header/Header";

function OrderDetail() {
  let { orderId } = useParams();

  const [orderById, setOrderById] = useState([]);

  useEffect(() => {
    async function fetchOrderById() {
      let orderById = await axiosClient.get(`/order/${orderId}`);
      if (orderById.data) {
        setOrderById(orderById.data);
      }
    }
    fetchOrderById();
  }, [orderId]);

  console.log(orderById);

  return (
    <div className="order__detail">
      <Header title="CHI TIET HOA DON" />
      <table className="styled-table">
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th>DATE ORDER</th>
          </tr>
        </thead>
        <tbody>
          {orderById.map((item) => (
            <tr key={item.id}>
              <td>{item.product.productname}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.subtotal}</td>
              <td>{item.order.create_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetail;
