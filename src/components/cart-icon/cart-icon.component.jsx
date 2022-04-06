import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = ({ onClick }) => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
