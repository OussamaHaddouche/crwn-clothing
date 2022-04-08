import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const increaseQuantity = () => dispatch(addItemToCart(cartItems, item));

  const decreaseQuantity = () => dispatch(removeItemFromCart(cartItems, item));

  const removeItem = () => dispatch(clearItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt={name} src={imageUrl} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
