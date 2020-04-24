import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-actions'


const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :<span className="empty-message">No items in the cart</span>}
            </div>
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden());
                history.push('/checkout')
                }}>
                GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(withRouter(CartDropdown));