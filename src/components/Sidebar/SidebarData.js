import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ReceiptIcon from "@material-ui/icons/Receipt";

export const SidebarData = [
  {
    title: "Nhân Viên",
    icon: <PersonIcon />,
    link: "/staff",
  },
  {
    title: "Danh Sách Hàng Hóa",
    icon: <ListAltIcon />,
    link: "/goods",
  },
  {
    title: "Danh Sách Hóa Đơn",
    icon: <ReceiptIcon />,
    link: "/bill",
  },
];
