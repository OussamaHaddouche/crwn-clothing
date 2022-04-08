import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});
