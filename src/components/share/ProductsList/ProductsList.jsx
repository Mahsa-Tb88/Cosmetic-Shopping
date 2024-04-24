import React, { useEffect, useState } from "react";
import "./productsList.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";

export default function ProductsList({ products }) {
  const shops = useSelector((state) => state.cart.shops);
  const dispatch = useDispatch();

  function incHandler(product) {
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

  // useEffect(() => {
  //   if (shops.length) {
  //     localStorage.shopping = JSON.stringify(shops);
  //   } else {
  //     delete localStorage.shopping;
  //   }
  // }, [shops]);
  return (
    <div className="row g productList ms-3">
      {products.map((p) => {
        const selectedItem = shops.find((item) => item.id == p.id);
        return (
          <div className="col-12 col-md-6 col-lg-4 px-2 mb-5 pb-5" key={p.id}>
            <div className="h-100 px-3">
              <div className="d-felx flex-column justify-content-center align-items-baseline border border-1 ">
                <Link className="link" to={"/product/" + `${p.id}`}>
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
                <div>
                  {!selectedItem ? (
                    <button
                      className="btn-addToCart text-white py-3 fs-4"
                      onClick={() => incHandler(p)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <AddtoCart product={p} />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
function AddtoCart({ product }) {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.cart.shops);
  const findProduct = shops.find((p) => p.id == product.id);

  function incHandler(product) {
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
  function decHandler(product) {
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
  function deleteHandler(product) {
    const newShops = shops.filter((p) => p.id !== product.id);
    dispatch(cartActions.setDeleteProduct(newShops));
  }
  return (
    <div className="px-2 py-3 d-flex justify-content-between align-items-center mt-auto btn-add">
      <div
        className="btn-trash d-flex justify-content-center align-items-center"
        onClick={() => deleteHandler(product)}
      >
        <FaRegTrashAlt size={17} />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <span className="btn-minus" onClick={() => decHandler(product)}>
          <FaMinus size={15} />
        </span>
        <span className="text-black mx-3 fs-4">{findProduct.count}</span>
        <span className="btn-plus" onClick={() => incHandler(product)}>
          <FaPlus size={15} />
        </span>
      </div>
    </div>
  );
}
