import React from "react";
import "./MaterialItem.css";

function MaterialItem({ name, price, quantity, product, onAdd }) {
  return (
    <div className="material__item" onClick={() => onAdd(product)}>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p className="quantity">{quantity}</p>
    </div>
  );
}

export default MaterialItem;
