import React from "react";
import { addToCart } from "../../redux/cart/cartAction";
import { connect } from "react-redux";

import "./ProductItem.css";
function ProductItem({ name, price, imageUrl, productId, addToCart }) {
  return (
    <div className="all-product__item">
      <img src={imageUrl} alt="" />
      <div>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <button className="add" onClick={() => addToCart(productId)}>
          Add
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
