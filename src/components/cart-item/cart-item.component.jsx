import { CartItemContainer, ItemContainer, BaseSpan } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img alt={name} src={imageUrl} />
      <ItemContainer>
        <BaseSpan>{name}</BaseSpan>
        <BaseSpan>
          {quantity} x ${price}
        </BaseSpan>
      </ItemContainer>
    </CartItemContainer>
  );
};

export default CartItem;
