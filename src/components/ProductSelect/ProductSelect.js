import React, { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./ProductSelect.css";
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../redux/cart/cartAction";

function ProductSelect({
  name,
  qty,
  price,
  removeFromCart,
  productId,
  adjustQty,
}) {
  const [qtyInput, setQtyInput] = useState(qty);
  console.log(qty);

  const onChangeHandler = (e) => {
    setQtyInput(e.target.value);
    adjustQty(productId, e.target.value);
  };

  return (
    <div className="productSelect">
      <div className="group-name">
        <HighlightOffIcon onClick={() => removeFromCart(productId)} />
        <p>{name}</p>
      </div>
      <div className="initialPrice">{price}</div>
      <div className="price-quantity">
        <input
          type="number"
          onChange={onChangeHandler}
          value={qty}
          name="qty"
          min="1"
        />
      </div>
      <div className="total">{qty * price}</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(ProductSelect);
