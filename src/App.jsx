import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { initialize } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/slices/userSlice.js";
import Initializer from "./pages/share/Initializer/Initializer.jsx";

export default function App() {
  const dispatch = useDispatch();
  const initializedError = useSelector((state) => state.user.initializedError);
  const initialized = useSelector((state) => state.user.initialized);

  useEffect(() => {
    const timeOut = setTimeout(initializeApp, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function initializeApp() {
    dispatch(userActions.setInitializedError(false));
    const savedTheme = localStorage.theme === "dark" ? "dark" : "light";
    dispatch(userActions.setTheme(savedTheme));
    const result = await initialize();
    if (result.success) {
      const { body } = result;
      if (body.user) {
        const { user } = body;
        user.isAdmin = user.role === "admin";
        user.isLoggedIn = true;
        dispatch(setUser(user));
      }
      dispatch(userActions.setCategories(body.categories));
      dispatch(userActions.setInitialized(true));
    } else {
      dispatch(userActions.setInitializedError(result.message));
    }
  }

  if (initializedError || !initialized) {
    return <Initializer initializeApp={initializeApp} />;
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}
