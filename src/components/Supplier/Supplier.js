import * as React from "react";
import {Link} from "react-router-dom";
import "./Supplier.css";

import { DataGrid } from "@material-ui/data-grid";

import SearchIcon from "@material-ui/icons/Search"; 
import AddIcon from "@material-ui/icons/Add";

const columns = [
  { field: "id", headerName: "Mã Nhà Cung Cấp", width: 200 },
  { field: "TenNhaCungCap", headerName: "Tên Nhà Cung Cấp", width: 200 },
  { field: "DiaChi", headerName: "Địa Chỉ", width: 230 },
  { field: "SoDienThoai", headerName: "Số Điện Thoại", width: 230 }
];

const rows = [
  { id: 1, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "01234567" },
  { id: 2, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "1234567" },
  { id: 3, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "12345678" },
  { id: 4, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "6876456456" },
  { id: 5, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "3454657567" },
  { id: 6, TenNhaCungCap: "CTy XX", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "4576576576" },
  { id: 7, TenNhaCungCap: "Apple tea", DiaChi: "243 cao dat phuong 1 quan 5", SoDienThoai: "467654765757" }
];


function Supplier() {
  return (<div className="supplier">
  <div className="header">
    <div className="header__left">
      <h1>Nhà Cung Cấp</h1>
    </div>
    <div className="header__middle">
      <SearchIcon className="header__middle--icon" />
      <input placeholder="Search here" className="header__middle--input" />
    </div>
    <div className="header__right">
      <AddIcon className="header__right--icon" />
      <Link to="supplier/create"><p>Thêm Nhà Cung Cấp</p></Link>
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
</div>)
}

export default Supplier;
