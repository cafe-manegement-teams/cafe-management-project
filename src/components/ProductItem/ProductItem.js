import React from "react";
import { addToCart } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import imageCafe from "../../asset/cafe.jpg";

import "./ProductItem.css";
function ProductItem({ name, price, id, addToCart }) {
  return (
    <div className="all-product__item">
      <img src={imageCafe} alt="" />
      <div>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <button className="add" onClick={() => addToCart(id)}>
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
