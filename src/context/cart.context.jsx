import { createContext, useEffect, useState } from "react";

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(({ id }) => id === itemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(({ id }) => id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === existingCartItem.id
      ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
      : item
  );
};

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(({ id }) => id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(({ id }) => id !== itemToClear.id);
};

const countTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

const countTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  const clearItemFromCart = (item) => {
    setCartItems(clearCartItem(cartItems, item));
  };

  useEffect(() => {
    setTotalQuantity(countTotalQuantity(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(countTotalPrice(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalQuantity,
    clearItemFromCart,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
