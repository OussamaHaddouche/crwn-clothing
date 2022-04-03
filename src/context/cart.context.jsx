import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(({ id }) => id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const countTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  useEffect(() => {
    setTotalQuantity(countTotalQuantity(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
