import axios from "../api/axiosClient";

let products = [];

// function fetchProduct() {
//   axios.get("/product/all").then((data) => {
//     products.push(data.data);
//     console.log(data.data);
//   });
// }

// fetchProduct();
const productData = {
  products: products,
  // products: [
  //   {
  //     productId: "1",
  //     productName: "Adelle Herzog",
  //     Image: "https://picsum.photos/130/120.jpg",
  //     productPrice: 32444,
  //   },
  // ],
};

export default productData;
