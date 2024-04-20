import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div className="sidebarAdmin">
      <h3 className=" titleAdmin d-flex justify-content-center align-items-center">
        <Link to="/">
          <img src="../public/images/logo.png" className="logo-admin" />
        </Link>
      </h3>
      <div className=" d-flex flex-column  px-md-3 vh-100">
        <NavLink
          className="link my-3 py-4 linkAdmin w-100 ps-md-4 px-3 text-center text-md-start "
          to="products"
        >
          Products
        </NavLink>
        <NavLink
          className="link my-3 py-4 linkAdmin w-100 ps-md-4 px-3 text-center text-md-start "
          to="categories"
        >
          Categories
        </NavLink>
        <NavLink
          className="link my-3 py-4 linkAdmin w-100 ps-md-4 px-3 text-center text-md-start "
          to="users"
        >
          Users
        </NavLink>
        <NavLink
          className="link my-3 py-4 linkAdmin w-100 ps-md-4 px-3 text-center text-md-start "
          to="blogs"
        >
          Blogs
        </NavLink>
      </div>
    </div>
  );
}
