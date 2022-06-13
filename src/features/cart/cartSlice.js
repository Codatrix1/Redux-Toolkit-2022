import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);

//------------------
// Action creators
//-------------------
export const { clearCart } = cartSlice.actions;

//----------------
// Default Export
//----------------
export default cartSlice.reducer;
