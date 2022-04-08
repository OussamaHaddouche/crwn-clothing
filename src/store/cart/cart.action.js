import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(({ id }) => id !== itemToClear.id);
};

const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, item) => {
  const updatedCartItems = addCartItem(cartItems, item);
  return setCartItems(updatedCartItems);
};

export const removeItemFromCart = (cartItems, item) => {
  const updatedCartItems = removeCartItem(cartItems, item);
  return setCartItems(updatedCartItems);
};

export const clearItemFromCart = (cartItems, item) => {
  const updatedCartItems = clearCartItem(cartItems, item);
  return setCartItems(updatedCartItems);
};

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, bool);
};
