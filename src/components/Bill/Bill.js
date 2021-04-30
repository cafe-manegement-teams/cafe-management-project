import React, { useEffect, useState } from "react";
import ProductSelect from "../ProductSelect/ProductSelect";
import "./Bill.css";
import { connect } from "react-redux";
import axios from "../../api/axiosClient";

function Bill({ cart }) {
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");

  const order = cart;

  // console.log(cart);

  useEffect(() => {
    let quantity = 0;
    let price = 0;

    // eslint-disable-next-line array-callback-return
    cart.forEach((item) => {
      // console.log(item);
      quantity += item.qty;
      price += item.qty * item.price;

      // console.log(quantity);
    });

    setTotal(price);
    setTotalItems(quantity);
  }, [cart, totalItems]);

  const createOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("No product");
      return;
    }
    let order = await axios.post("/order/create", {});
    setOrderId(order.data);
    alert("Create order!");
  };

  const pay = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("No");
      return;
    }
    if (!orderId) {
      alert("No order created!!");
      return;
    }
    // console.log(order);
    let bill = await axios.post(`/order/${orderId}/add`, order);

    console.log(bill.data);
    if (bill.data) {
      axios.post(`/order/${orderId}/print`).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="bill">
      <h3 className="title">Bill</h3>
      <div className="form-bill">
        {cart.map((item) => {
          return (
            <ProductSelect
              key={item.id}
              name={item.productname}
              qty={item.qty}
              price={item.price}
              productId={item.id}
            />
          );
        })}
      </div>
      <div className="pay">
        <div className="button-pay">
          <button onClick={createOrder} className="order">
            CREATE ORDER
          </button>
          <button onClick={pay} className="pay">
            PAY
          </button>
        </div>
        <div className="pay-total">
          <p>Total Quantity</p>
          <p>Total money</p>
        </div>
        <div className="result">
          <p>{totalItems}</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Bill);
