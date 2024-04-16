import React from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/admin/SidebarAdmin/SidebarAdmin";
import HeaderAdmin from "../components/admin/HeaderAdmin/HeaderAdmin";

export default function AdminLayout() {
  return (
    <div>
      <HeaderAdmin />
      <div className="">
        <SidebarAdmin />
        <Outlet />
      </div>
    </div>
  );
}
