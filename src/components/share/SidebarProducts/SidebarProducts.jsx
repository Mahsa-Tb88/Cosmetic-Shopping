import React from "react";
import "./sidebarProducts.scss";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SidebarProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useSelector((state) => state.user.categories);
  const limit = useSelector((state) => state.shop.limit);
  const category = useSelector((state) => state.shop.category);
  const search = useSelector((state) => state.shop.q);
  const sort = useSelector((state) => state.shop.sort);
  const order = useSelector((state) => state.shop.order);

  function searchHandler(value) {
    const params = getNewSearchParams(searchParams, "q", value);
    setSearchParams(params);
  }

  function categoryHandler(value) {
    const params = getNewSearchParams(searchParams, "category", value);
    const secondparams = getNewSearchParams(params, "page", 1);
    setSearchParams(secondparams);
  }

  function sortHandler(value) {
    console.log(value);
    let newValue = {};
    if (value == "cheapest") {
      newValue = { sort: "price", order: "asc" };
    } else if (value == "expensive") {
      newValue = { sort: "price", order: "desc" };
    } else if (value == "oldest") {
      newValue = { sort: "id", order: "asc" };
    }
    const params = getNewSearchParams(searchParams, "sort", newValue.sort);
    const secondparams = getNewSearchParams(params, "order", newValue.order);
    const thirdParams = getNewSearchParams(secondparams, "page", 1);
    setSearchParams(thirdParams);
  }
  function getSortType() {
    if (sort === "id" && order === "desc") {
      return "newest";
    } else if (sort === "id" && order === "asc") {
      return "oldest";
    } else if (sort === "price" && order === "desc") {
      return "expensive";
    } else if (sort === "price" && shopState.order === "asc") {
      return "cheapest";
    }
  }

  function numHandler(value) {
    const params = getNewSearchParams(searchParams, "limit", value);
    const secondparams = getNewSearchParams(params, "page", 1);
    setSearchParams(secondparams);
  }

  return (
    <div className="sidebarProducts">
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Search</label>
        <input
          className="input px-1 py-1"
          placeholder="search..."
          onChange={(e) => searchHandler(e.target.value)}
          value={search}
        />
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Categories</label>
        <select
          className="category px-1 py-2"
          onChange={(e) => categoryHandler(e.target.value)}
          value={category}
        >
          <option value="">All</option>
          {categories.map((c) => {
            return (
              <option key={c.id} value={c.slug}>
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Sort</label>
        <select
          className="category px-1 py-2"
          onChange={(e) => sortHandler(e.target.value)}
          value={getSortType()}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="expensive">The most expensive</option>
          <option value="cheapest"> cheapest</option>
        </select>
      </div>
      <div className="d-flex flex-column mb-5">
        <label className="text-white mb-2 title">Number oF Products</label>
        <select
          className="category px-1 py-2"
          onChange={(e) => numHandler(e.target.value)}
          value={limit}
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}
