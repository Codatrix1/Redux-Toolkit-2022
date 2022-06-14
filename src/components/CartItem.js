import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";

// import actions for dispatch
import { removeItem } from "../features/cart/cartSlice";

//----------------
// React Component
//----------------
const CartItem = ({ id, img, title, price, amount }) => {
  // useDispatch
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      {/* increase amount */}
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

//----------------
// Default Export
//----------------
export default CartItem;
