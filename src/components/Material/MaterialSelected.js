import React from "react";
import "./MaterialSelected.css";

function MaterialSelected({ name, price }) {
  return (
    <div className="material__selectedItem">
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <input type="number" />
    </div>
  );
}

export default MaterialSelected;
