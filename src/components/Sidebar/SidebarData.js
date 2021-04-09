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
    title: "Nhà Cung Cấp",
    icon: <PersonIcon />,
    link: "/supplier",
  },
];
