import React, { useEffect, useState } from "react";
import ProductSelect from "../ProductSelect/ProductSelect";
import "./Bill.css";
import { connect } from "react-redux";

function Bill({ cart }) {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const timeElapsed = Date.now();

  const today = new Date(timeElapsed);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += items + item.productPrice;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems]);
  return (
    <div className="bill">
      <h3 className="title">Bill</h3>
      <div className="header">
        <input
          type="text"
          className="date"
          placeholder="Date"
          value={today.toDateString()}
        />
        <input type="text" className="name-employee" placeholder="Employee" />
      </div>
      <div className="form-bill">
        {cart.map((item) => {
          return (
            <ProductSelect
              key={item.productId}
              name={item.productName}
              qty={item.qty}
              price={item.productPrice}
              productId={item.productId}
            />
          );
        })}
      </div>
      <div className="pay">
        <div className="button-pay">
          <button>Pay here</button>
        </div>
        <div className="pay-total">
          <p>Total Quantity</p>
          <p>Total money</p>
        </div>
        <div className="result">
          <p>{totalItems}</p>
          <p>{totalPrice}</p>
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
