import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
    isLoggedIn: false,
    isAdmin: false,
    Username: "",
    firstname: "",
    lastname: "",
    role: "",
  },
  theme: "light",
  categories: [],
  initialized: false,
  initializedError: false,
  // initializeApp,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInitializedError(state, action) {
      state.initializedError = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setInitialized(state, action) {
      state.initialized = action.payload;
    },
  },
});

export default userSlice;
const userActions = userSlice.actions;
export { userActions };
