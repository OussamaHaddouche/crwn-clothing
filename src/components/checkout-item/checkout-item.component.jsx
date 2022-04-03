import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const increaseQuantity = () => addItemToCart(item);

  const decreaseQuantity = () => removeItemFromCart(item);

  const removeItem = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span onClick={decreaseQuantity} className="arrow">
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={increaseQuantity} className="arrow">
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div onClick={removeItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
