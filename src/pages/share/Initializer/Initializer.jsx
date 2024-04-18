import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../../utils/api";

export default function Initializer({ initializeApp }) {
  const initializedError = useSelector((state) => state.user.initializedError);
  const dispatch = useDispatch();

  if (initializedError) {
    return (
      <div>
        <h2>{initializedError}</h2>
        <button className="btn" onClick={() => initializeApp()}>
          Try Again
        </button>
      </div>
    );
  } else {
    return (
      <div className="initializer d-flex justify-content-center align-items-center vw-100 vh-100 flex-column">
        <h2 className="mb-4 loading">Loading ...</h2>
        <span className=" spiner spinner-grow fs-1"></span>
      </div>
    );
  }
}
