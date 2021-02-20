import React from "react";
import "./Paginate.css";

function Paginate({ goodsPerPage, totalGoods, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumber.map((number) => (
        <li key={number}>
          <p className="page-link" onClick={() => paginate(number)}>
            {number}
          </p>
        </li>
      ))}
    </nav>
  );
}

export default Paginate;
