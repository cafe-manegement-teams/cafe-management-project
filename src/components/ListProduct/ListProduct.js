import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ListProduct.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function ListProduct({ products }) {
  console.log(products);

  let history = useHistory();

  const [listProduct, setListProduct] = useState([]);

  console.log(listProduct[0]);

  useEffect(() => {
    if (!products[0]) {
      return null;
    }
    setListProduct(products);
  }, [products]);

  return (
    <div className="list-product">
      <div className="header">
        <h3 onClick={() => history.push("/")}>Cafe Product</h3>
        <form>
          <input type="text" placeholder="search product here ...!" />
        </form>
      </div>
      <div className="all-product">
        {listProduct[0] &&
          listProduct[0].map((product) => {
            return (
              <ProductItem
                key={product.id}
                name={product.productname}
                price={product.price}
                id={product.id}
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
