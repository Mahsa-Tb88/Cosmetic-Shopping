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
      state.page = action.payload;
      state.q = action.payload;
      state.limit = action.payload;
      state.category = action.payload;
      state.sort = action.payload;
      state.order = action.payload;
      state.delay = action.payload;
    },
  },
});

export default shopSlice;
const shopActions = shopSlice.actions;
export { shopActions };
