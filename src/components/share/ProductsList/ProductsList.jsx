import React, { useEffect, useState } from "react";
import "./productsList.css";
import { Link } from "react-router-dom";

export default function ProductsList({ products }) {
  return (
    <div className="row g productList ms-3">
      {products.map((p) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 px-2 mb-5 pb-5" key={p.id}>
            <div className="h-100 px-3">
              <div className="d-felx flex-column justify-content-center align-items-baseline border border-1 ">
                <Link className="link">
                  <div className="img-product">
                    <img className="" src={SERVER_URL + p.image} />
                  </div>
                  <h3 className="pt-5 pb-3 mb-4 text-center title">
                    {p.title}
                  </h3>
                </Link>
                <div className="d-flex justify-content-between align-items-center py-3 px-2">
                  <span className="fs-3">Price</span>
                  <span className="fs-3">${p.price}</span>
                </div>
                <div className="">
                  <button className="btn-addToCart text-white py-3 fs-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
