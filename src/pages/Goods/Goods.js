import React, { useState, useEffect } from "react";
import "./Goods.css";

import Paginate from "../../components/Pagination/Paginate";
import Header from "../../components/Header/Header";
import axiosClient from "../../api/axiosClient";

function Goods() {
  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage, setGoodPerPage] = useState(10);

  useEffect(() => {
    async function fetchGood() {
      let goods = await axiosClient.get("/material/all");
      if (goods.data) {
        setGoods(goods.data);
        // console.log(goods.data);
      }
    }
    fetchGood();
  }, []);

  // get current page
  const indexOfLastGood = currentPage * goodsPerPage;
  const indexOfFirstGood = indexOfLastGood - goodsPerPage;
  const currentGoods = goods.slice(indexOfFirstGood, indexOfLastGood);
  // console.log(currentGoods);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="good">
      <Header title="HÀNG HÓA" link="/goods/create" />

      {/* table data */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>UNIT</th>
            <th>UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          {currentGoods &&
            currentGoods.map((good) => (
              <tr key={good.id}>
                <td>{good.materialname}</td>
                <td>{good.quantity}</td>
                <td>{good.unit}</td>
                <td>{good.unitprice}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginate
        goodsPerPage={goodsPerPage}
        totalGoods={goods.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Goods;
