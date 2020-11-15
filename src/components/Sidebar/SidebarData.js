import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import HouseIcon from "@material-ui/icons/House";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AssessmentIcon from "@material-ui/icons/Assessment";

export const SidebarData = [
  {
    title: "Nhân Viên",
    icon: <PersonIcon />,
    link: "/staff",
  },
  {
    title: "Danh Sách Hàng Hóa",
    icon: <ClearAllIcon />,
    link: "/goods",
  },
  {
    title: "Danh Sách Kho Hàng",
    icon: <HouseIcon />,
    link: "/warehouses",
  },
  {
    title: "Danh Sách Phiếu Nhập",
    icon: <ReceiptIcon />,
    link: "/receiptbill",
  },
  {
    title: "Danh Sách Phiếu Xuất",
    icon: <ReceiptIcon />,
    link: "/deliverybill",
  },
  {
    title: "Nhà Cung Cấp",
    icon: <PersonIcon />,
    link: "/supplier",
  },

  {
    title: "Thống Kê Chi Phí",
    icon: <AssessmentIcon />,
    link: "/report/CostReport",
  },

  {
    title: "Thống Kê Bán Hàng",
    icon: <AssessmentIcon />,
    link: "/Report/SaleReport",
  },

  {
    title: "Thống Kê Doanh Thu",
    icon: <AssessmentIcon />,
    link: "/Report/RevenueReport",
  },
  {
    title: "Login",
    icon: <ClearAllIcon />,
    link: "/login",
  },
];
