import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ListProduct.css";
import { connect } from "react-redux";

function ListProduct({ products }) {
  return (
    <div className="list-product">
      <div className="header">
        <h3>Cafe Product</h3>
        <form>
          <input type="text" placeholder="search product here ...!" />
        </form>
      </div>
      <div className="all-product">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.productId}
              name={product.productName}
              price={product.productPrice}
              imageUrl={product.Image}
              productId={product.productId}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

export default connect(mapStateToProps)(ListProduct);
