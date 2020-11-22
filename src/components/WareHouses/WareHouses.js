import React from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@material-ui/data-grid";

import SearchIcon from "@material-ui/icons/Search"; 
import AddIcon from "@material-ui/icons/Add";
import "./Warehouses.css"

const columns = [
  { field: "id", headerName: "Mã Kho Hàng", width: 150 },
  { field: "TenKhoHang", headerName: "Tên Kho Hàng", width: 230 },
  { field: "DiaChi", headerName: "Địa CHỉ", width: 230 },
 
];

const rows = [
  { id: 1, TenKhoHang: "VT", DiaChi: "248 Phan Van Tri, Go Vap" },
  { id: 2, TenKhoHang: "CM", DiaChi: "248 Phan Van Tri, Go Vap",},
  { id: 3, TenKhoHang: "AG", DiaChi: "248 Phan Van Tri, Go Vap",},
  { id: 4, TenKhoHang: "KG", DiaChi: "248 Phan Van Tri, Go Vap",},
  { id: 5, TenKhoHang: "HG", DiaChi: "248 Phan Van Tri, Go Vap",},
  { id: 6, TenKhoHang: "PT", DiaChi: "248 Phan Van Tri, Go Vap",},
  { id: 7, TenKhoHang: "CT", DiaChi: "248 Phan Van Tri, Go Vap",},
  
];

function WareHouses() {
  return (
    <div className="warehouse">
      <div className="header">
        <div className="header__left">
          <h1>Kho Hàng</h1>
        </div>
        <div className="header__middle">
          <SearchIcon className="header__middle--icon" />
          <input placeholder="Search here" className="header__middle--input" />
        </div>
        <div className="header__right">
          <AddIcon className="header__right--icon" />
          <Link to="warehouses/create"><p>Thêm Kho Hàng</p></Link>
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

export default WareHouses;
