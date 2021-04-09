import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ListProduct.css";
// import { BsSearch } from "react-icons/bs";

function ListProduct() {
  return (
    <div className="list-product">
      <div className="header">
        <h3>Cafe Product</h3>
        <form>
          <input type="text" placeholder="search product here ...!" />
        </form>
      </div>
      <div className="all-product">
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
        <ProductItem name="cafe" price="30.000" />
      </div>
    </div>
  );
}

export default ListProduct;
