import React from "react";
import Header from "../components/share/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/share/Footer/Footer";

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
