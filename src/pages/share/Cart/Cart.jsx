import React, { useEffect } from "react";
import "./cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";

export default function Cart() {
  const shops = useSelector((state) => state.cart.shops);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (shops.length) {
      localStorage.shopping = JSON.stringify(shops);
    } else {
      delete localStorage.shopping;
    }
  }, [shops]);

  let totalPrice = 0;
  shops.forEach((element) => {
    totalPrice = element.price * element.count + totalPrice;
  });

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
    <div className="cart vh-100 px-2 px-md-0">
      <Helmet>Cart</Helmet>
      <h1 className="my-5 text-center">Shopping Card</h1>
      {shops.length ? (
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr className="table-row">
              <th scope="col">Row</th>
              <th scope="col">Title</th>
              <th scope="col">Number Of Item</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((p, i) => {
              return (
                <tr key={p.id} className="table-row">
                  <th scope="row">{i + 1}</th>

                  <td>
                    <Link className="linkcart" to={"/product/" + `${p.id}`}>
                      {p.title}
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex justify-content-around align-items-center">
                      <span
                        className="btn-minuCart"
                        onClick={() => decNumOfItem(p)}
                      >
                        <FaMinus />
                      </span>
                      <span className="linkcart ">{p.count}</span>
                      <span
                        className="btn-plusCart"
                        onClick={() => incNumOfItem(p)}
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </td>
                  <td>$ {p.price}</td>
                  <td>${p.price * p.count}</td>
                  <td>
                    <div
                      className="btn-trashCart d-flex justify-content-center align-items-center"
                      onClick={() => removeItem(p)}
                    >
                      <FaRegTrashAlt />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="totalPrice fw-bold ">
                Total Price
              </td>
              <td className="totalPrice fw-bold ">$ {totalPrice}</td>
              <td colSpan="4"></td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="vh-100">
          <p className="text-center cardEmpty fs-2 ">Your card is empty</p>
        </div>
      )}
    </div>
  );
}
