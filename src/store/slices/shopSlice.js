import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  q: "",
  limit: 6,
  category: "",
  sort: "id",
  order: "desc",
  delay: 10,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.page = action.payload.page;
      state.q = action.payload.q;
      state.limit = action.payload.limit;
      state.category = action.payload.category;
      state.sort = action.payload.sort;
      state.order = action.payload.order;
      state.delay = action.payload.delay;
    },
  },
});

export default shopSlice;
const shopActions = shopSlice.actions;
export { shopActions };
