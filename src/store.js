import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import cartReducer from "./features/cart/cartSlice";

// store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

//----------------
// Default Export
//----------------
export default store;
