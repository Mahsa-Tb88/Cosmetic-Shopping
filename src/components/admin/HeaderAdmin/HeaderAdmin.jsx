import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
export default function HeaderAdmin() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const lastname = useSelector((state) => state.user.user.lastname);
  const theme = useSelector((state) => state.user.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOutHandler() {
    dispatch(userActions.setLogout(false));
    navigate("/");
  }

  function themeHandler() {
    const newtheme = localStorage.theme == "dark " ? "light" : "dark";
    dispatch(userActions.setTheme(newtheme));
  }

  return (
    <div className="headerAdmin d-flex justify-content-between align-items-center">
      <h3>{firstname + " " + lastname}</h3>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-mood d-flex justify-content-center align-items-center p-1"
          onClick={themeHandler}
        >
          {theme == "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
        </button>
        <button
          className="signout-btnAdmin  py-1 px-md-3 "
          onClick={signOutHandler}
        >
          Sing Out
        </button>
        <Link className="back-btnAdmin ms-2  py-1 px-md-3 " to="/panel">
          Back
        </Link>
      </div>
    </div>
  );
}
