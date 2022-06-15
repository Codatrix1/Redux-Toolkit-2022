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

    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      const cartItems = state.cartItems.find((item) => item.id === itemId);
      cartItems.amount = cartItems.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItems = state.cartItems.find((item) => item.id === payload.id);
      cartItems.amount = cartItems.amount - 1;
    },
  },
});

// console.log(cartSlice);

//------------------
// Action creators
//-------------------
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

//----------------
// Default Export
//----------------
export default cartSlice.reducer;
