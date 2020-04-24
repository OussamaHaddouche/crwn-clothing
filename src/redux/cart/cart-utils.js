export const addItemUtil = (cart, item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id);
    if (itemExists) {
        return cart.map(cartItem => 
            cartItem.id === item.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cart, {...item, quantity: 1 }];
}