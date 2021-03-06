import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import actions for dispatch
import { clearCart } from "../features/cart/cartSlice";

// import components
import CartItem from "./CartItem";

//----------------
// React Component
//----------------
const CartContainer = () => {
  // useDispatch
  const dispatch = useDispatch();

  // accessing the state we want through the store
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>{" "}
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

//----------------
// Default Export
//----------------
export default CartContainer;
