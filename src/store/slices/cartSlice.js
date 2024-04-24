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
