import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './Collection-item.scss';
import { connect } from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart-actions'

const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="item">
            <div
            className="item-image"
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="item-footer">
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
            </div>
            <CustomButton onClick={()=>addItemToCart(item)} inverted>Add to cart</CustomButton> 
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItemToCart : item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);