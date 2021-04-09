import React from "react";
import Bill from "../../components/Bill/Bill";
import ListProduct from "../../components/ListProduct/ListProduct";
import "./Sale.css";

function Sale() {
  return (
    <div className="sale">
      <div className="col-8 left-product">
        <ListProduct />
      </div>
      <div className="col-4 right-bill">
        <Bill />
      </div>
    </div>
  );
}

export default Sale;
