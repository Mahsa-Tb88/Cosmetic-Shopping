import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
  numOfShopping: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShops(state, action) {
      state.shops = action.payload;
    },
    setIncProduct(state, action) {
      localStorage.shopping = JSON.stringify(action.payload);
      state.shops = action.payload;
    },
    setDecProduct(state, action) {
      localStorage.shopping = JSON.stringify(action.payload);
      state.shops = action.payload;
    },
    setDeleteProduct(state, action) {
      localStorage.shopping = JSON.stringify(action.payload);
      state.shops = action.payload;
    },
  },
});

export default cartSlice;
const cartActions = cartSlice.actions;
export { cartActions };

export function setIncHandler(product) {
  return function (dispatch, getState) {
    const shops = getState().cart.shops;
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
  };
}

export function setDecHandler(product) {
  return function (dispatch, getState) {
    const shops = getState().cart.shops;
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
  };
}

export function setDeleteHandler(product) {
  return function (dispatch, getState) {
    const shops = getState().cart.shops;
    const newShops = shops.filter((p) => p.id !== product.id);
    dispatch(cartActions.setDeleteProduct(newShops));
  };
}
