import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./ProductSelect.css";

function ProductSelect() {
  return (
    <div className="productSelect">
      <div className="group-name">
        <HighlightOffIcon />
        <p>Cafe</p>
      </div>
      <div className="price-quantity">
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
      <div className="total">30.000</div>
    </div>
  );
}

export default ProductSelect;
