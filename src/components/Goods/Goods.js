import * as React from "react";
import {Link} from "react-router-dom";
import "./Goods.css";

import { DataGrid } from "@material-ui/data-grid";

import SearchIcon from "@material-ui/icons/Search"; 
import AddIcon from "@material-ui/icons/Add";

const columns = [
  { field: "id", headerName: "Mã Hàng Hóa", width: 150 },
  { field: "nameGood", headerName: "Tên Hàng Hóa", width: 230 },
  { field: "unit", headerName: "Đơn Vị Tính", width: 230 },
  { field: "price", headerName: "Giá", width: 230 }
];

const rows = [
  { id: 1, nameGood: "Cafe", unit: "bịch", price: 550.0 },
  { id: 2, nameGood: "Mango tea", unit: "thùng", price: 400.0 },
  { id: 3, nameGood: "Peach tea", unit: "thùng", price: 450.0 },
  { id: 4, nameGood: "Lychee tea", unit: "thùng", price: 500.0 },
  { id: 5, nameGood: "Socola", unit: "thùng", price: 800.0 },
  { id: 6, nameGood: "Caramel", unit: "thùng", price: 640.0 },
  { id: 7, nameGood: "Apple tea", unit: "thùng", price: 350.0 },
  { id: 8, nameGood: "Green tea", unit: "thùng", price: 600.0 },
  { id: 9, nameGood: "Jasmine tea", unit: "thùng", price: 650.0 },
];

function Goods() {
  return (
    <div className="goods">
      <div className="header">
        <div className="header__left">
          <h1>Hàng Hóa</h1>
        </div>
        <div className="header__middle">
          <SearchIcon className="header__middle--icon" />
          <input placeholder="Search here" className="header__middle--input" />
        </div>
        <div className="header__right">
          <AddIcon className="header__right--icon" />
          <Link to="goods/create"><p>Thêm Hàng Hóa</p></Link>
        </div>
      </div>
      {/* content table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Goods;
