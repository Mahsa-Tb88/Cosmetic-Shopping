import React from "react";
import "./pagination.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function Pagination({ numOfPage }) {
  let pages = [];
  for (let i = 1; i <= numOfPage; i++) {
    pages.push(i);
  }

  return (
    <div className=" d-flex justify-content-center align-items-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">
            <MdKeyboardDoubleArrowLeft />
          </a>
        </li>
        {pages.map((p) => {
          return (
            <li className="page-item">
              <a className="page-link">{p}</a>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link">
            <MdKeyboardDoubleArrowRight />
          </a>
        </li>
      </ul>
    </div>
  );
}
