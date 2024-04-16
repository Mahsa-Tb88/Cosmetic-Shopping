import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Mahsa",
  isLogedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setIslogedIn(state, action) {
      state.isLogedIn = action.payload;
    },
  },
});

export default userSlice;
const userActions = userSlice.actions;
export { userActions };
