import React, { useEffect } from "react";
import "./panel.css";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Panel() {
  useEffect(() => {}, []);

  return (
    <div className="panel d-flex">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="w-25 sideBar ">
        <div className="d-flex flex-column  justify-align-content-center align-items-center px-3">
          <NavLink
            className="link my-3  py-4 w-100 ps-md-4  w-50 text-center text-md-start"
            to="/panel"
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            className="link my-3  py-4 w-100 ps-md-4  w-50 text-center text-md-start"
            to="profile"
          >
            Profile
          </NavLink>
        </div>
      </div>
      <div className=" w-75 ">
        <Outlet />
      </div>
    </div>
  );
}
