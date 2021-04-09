import React from "react";
import ProductSelect from "../ProductSelect/ProductSelect";
import "./Bill.css";

function Bill() {
  return (
    <div className="bill">
      <h3 className="title">Bill</h3>
      <div className="header">
        <input type="text" className="date" placeholder="Date" />
        <input type="text" className="name-employee" placeholder="Employee" />
      </div>
      <div className="form-bill">
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
        <ProductSelect />
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
          <p>10</p>
          <p>100.000</p>
        </div>
      </div>
    </div>
  );
}

export default Bill;
