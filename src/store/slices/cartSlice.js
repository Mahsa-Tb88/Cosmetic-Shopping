import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShops(state, action) {
      state.shops = action.payload;
    },
  },
});

export default cartSlice;
const cartActions = cartSlice.actions;
export { cartActions };
