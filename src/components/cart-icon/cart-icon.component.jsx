import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = ({ onClick }) => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div onClick={onClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
