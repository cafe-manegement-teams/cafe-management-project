import * as actionTypes from "./cartTypes";
import productData from "../../data/ProductData";
import axios from "../../api/axiosClient";

const products = [];

async function fetchProduct() {
  var productData = await axios.get("/product/all");
  // console.log(productData.data);
  products.push(productData.data);
}

fetchProduct();

const INITIAL_STATE = {
  products: products, //  name price
  cart: [], // name price qty
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the items data from the products array
      const item = state.products[0].find(
        (prod) => prod.id === action.payload.id
      );
      // check if item is in cart already
      const inCart = state.cart.find((item) => {
        return item.id === action.payload.id ? true : false;
      });
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
      };
    default:
      return state;
  }
};
export default cartReducer;
