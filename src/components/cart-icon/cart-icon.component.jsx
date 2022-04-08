import { useSelector } from "react-redux";

import { selectCartCount } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";


const CartIcon = ({ onClick }) => {
  const cartCount = useSelector(selectCartCount);
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
