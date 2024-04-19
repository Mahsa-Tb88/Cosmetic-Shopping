import React, { useEffect, useReducer, useState } from "react";
import "./productsShop.scss";
import SidebarProducts from "../../../components/share/SidebarProducts/SidebarProducts";
import ProductsList from "../../../components/share/ProductsList/ProductsList";
import Pagination from "../../../components/share/Pagination/Pagination";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../utils/api";
import { shopActions } from "../../../store/slices/shopSlice";

export default function ProductsShop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    const q = searchParams.get("q") || "";
    const limit = searchParams.get("limit") || 6;
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "id";
    const order = searchParams.get("order") || "desc";
    let delay = 10;
    if (shop.q != q) {
      delay = 2000;
    }
    dispatch(
      shopActions.setFilter({ page, limit, category, q, sort, order, delay })
    );
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, shop.delay);
    return () => clearTimeout(timeOut);
  }, [shop]);

  async function fetchProducts() {
    setIsLoading(true);
    const result = await getProducts(
      shop.page,
      shop.limit,
      shop.category,
      shop.q,
      shop.sort,
      shop.order
    );
    console.log(result);
    if (result.success) {
      setProducts(result.body);
      setTotalProducts(result.totalProducts.filtered);
      setError(false);
    } else {
      setError(result.message);
    }
    setIsLoading(false);
  }

  const numOfPage = Math.ceil(totalProducts / shop.limit);

  return (
    <div className="productsShop  container">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className="text-center title-page">Products</h1>

      <div className="row ">
        <div className="col col-md-3  p-0">
          <SidebarProducts />
        </div>
        <div className="col col-md-9  p-0">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="msg me-3 fs-2">Is Loading...</h2>
              <span className="spinner spinner-grow msg"></span>
            </div>
          ) : error ? (
            <div>
              <h2 className="fs-2 msg">{error}</h2>
              <button className="btn-error" onClick={fetchProducts}>
                Try again
              </button>
            </div>
          ) : (
            <div>
              <ProductsList products={products} />
              {numOfPage != 1 && (
                <Pagination className="text-center" numOfPage={numOfPage} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
