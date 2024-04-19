import React from "react";
import "./sidebarProducts.scss";

export default function SidebarProducts() {
  return (
    <div className="sidebarProducts">
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Search</label>
        <input className="input px-1 py-1" placeholder="search..." />
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">categories</label>
        <select className="category px-1 py-2">
          <option value="all">All</option>
          <option value="makeUp">Make Up</option>
          <option value="bodyCare">Body Care</option>
          <option value="facialCare">Facial Care</option>
          <option value="hairCare">Hair Care</option>
        </select>
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Sort</label>
        <select className="category px-1 py-2">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="expensive">The most expensive</option>
          <option value="cheapest"> cheapest</option>
        </select>
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Number oF Products</label>
        <select className="category px-1 py-2">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}
