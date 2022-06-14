import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

//----------------
// React Component
//----------------
const Navbar = () => {
  // accessing the state we want through the store
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux-toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

//----------------
// Default Export
//----------------
export default Navbar;
