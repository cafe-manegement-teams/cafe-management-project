import React, { useState, useEffect } from "react";
import "./Goods.css";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import GoodData from "../../data/GoodData";
import Paginate from "../Pagination/Paginate";
import Header from "../Header/Header";

function Goods() {
  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage, setGoodPerPage] = useState(10);

  useEffect(() => {
    setGoods(GoodData);
  }, []);

  // get current page
  const indexOfLastGood = currentPage * goodsPerPage;
  const indexOfFirstGood = indexOfLastGood - goodsPerPage;
  const currentGoods = goods.slice(indexOfFirstGood, indexOfLastGood);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header title="HÀNG HÓA" ho link="/goods/create" />

      {/* table data */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {currentGoods.map((good) => (
            <tr>
              <td>{good.name}</td>
              <td>{good.price}</td>
              <td>{good.quantity}</td>
              <td>
                <button className="button-edit">
                  <EditIcon />
                </button>
                <button className="button-delete">
                  <DeleteIcon />
                </button>
              </td>
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
