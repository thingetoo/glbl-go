import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>{" "}
    {/* will update with a counter that will represent # of items in cart */}
  </div>
);

export default CartIcon;
