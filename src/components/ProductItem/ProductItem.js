import React from "react";
import "./ProductItem.css";
function ProductItem({ name, price }) {
  return (
    <div className="all-product__item">
      <img src="https://dummyimage.com/100x100/000/fff" alt="" />
      <div>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
