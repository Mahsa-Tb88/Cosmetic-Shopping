import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./product.css";
import { getProductById } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";
import { Helmet } from "react-helmet";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setIsLoadinError] = useState(false);
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();
  const shops = useSelector((state) => state.cart.shops);
  const dispatch = useDispatch();

  const cartProduct = shops.find((product) => product.id == productId);

  useEffect(() => {
    const timeOut = setTimeout(fetchProdut, 20);
    return () => clearTimeout(timeOut);
  }, [params.id]);

  async function fetchProdut() {
    setIsLoading(true);
    const result = await getProductById(productId);
    if (result.success) {
      setIsLoading(true);
      setSelectedProduct(result.body);
    } else {
      setIsLoadinError({ message: result.message, code: result.code });
    }
    setIsLoading(false);
  }

  function removeItem(product) {
    const newShops = shops.filter((p) => p.id !== product.id);
    dispatch(cartActions.setDeleteProduct(newShops));
  }

  function decNumOfItem(product) {
    const findProduct = shops.find((p) => p.id == product.id);
    let newShops;
    if (findProduct.count > 1) {
      newShops = shops.map((p) => {
        if (p.id == findProduct.id) {
          return { ...p, count: p.count - 1 };
        } else {
          return p;
        }
      });
    } else {
      newShops = shops.filter((p) => p.id != findProduct.id);
    }
    dispatch(cartActions.setDecProduct(newShops));
  }

  function incNumOfItem(product) {
    const findProduct = shops.find((p) => p.id == product.id);
    let newShops;
    if (findProduct) {
      newShops = shops.map((p) => {
        if (p.id == findProduct.id) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      });
    } else {
      newShops = [...shops, { ...product, count: 1 }];
    }
    dispatch(cartActions.setIncProduct(newShops));
  }

  return (
    <div className="productPage d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Product</title>
      </Helmet>
      {isLoading ? (
        <div className="text-center vh-100 d-flex justify-content-center align-items-center">
          <p className="loading fs-1">Loading ... </p>
          <p className="spinner spinner-grow fs-3"></p>
        </div>
      ) : loadingError ? (
        <div className=" text-center">
          <h2>{loadingError.message}</h2>
          {loadingError.code == "500" ? (
            <button className="btn my-5 px-3 y-2 btn-danger fs-4 ">
              Try again
            </button>
          ) : (
            <button
              className="btn my-5 btn-back px-3 py-2 fs-4"
              onClick={() => navigate("/shop")}
            >
              Back
            </button>
          )}
        </div>
      ) : (
        <div className="w-75 mx-auto">
          <h1 className="text-center  titleProduct">{selectedProduct.title}</h1>
          <div className=" text-center d-flex flex-column align-items-center justify-content-center">
            <div className=" text-center ">
              <img src={SERVER_URL + selectedProduct.image} />
            </div>
            <div className="my-3 w-50 ">
              <div className="my-5 ">
                <span className="fs-2 me-5">Price:</span>
                <span className="fs-2">${selectedProduct.price}</span>
              </div>
              {cartProduct ? (
                <div className="mt-5 d-flex justify-content-around align-items-center">
                  <div className="d-flex justify-content-around align-items-center">
                    <span
                      className="btn-minusProduct"
                      onClick={() => decNumOfItem(selectedProduct)}
                    >
                      <FaMinus />
                    </span>
                    <span className="text-black mx-3 mx-md-5 fs-4 ">
                      {cartProduct.count}
                    </span>
                    <span
                      className="btn-plusProduct"
                      onClick={() => incNumOfItem(selectedProduct)}
                    >
                      <FaPlus />
                    </span>
                  </div>
                  <div
                    className="btn-trashProduct d-flex justify-content-center align-items-center"
                    onClick={() => removeItem(selectedProduct)}
                  >
                    <FaRegTrashAlt />
                  </div>
                </div>
              ) : (
                <button
                  className="btnAddToCartProduct text-white fs-4"
                  onClick={() => incNumOfItem(selectedProduct)}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <p className="text-center my-5 fs-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
