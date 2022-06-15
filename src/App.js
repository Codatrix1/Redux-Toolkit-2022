import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";

//----------------
// React Component
//----------------
const App = function () {
  // accessing the state we want through the store
  const { cartItems } = useSelector((store) => store.cart);

  // useDispatch
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

//----------------
// Default Export
//----------------
export default App;
