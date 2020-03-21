import React, { Component } from 'react';
import ShopData from './shop_data';
import CollectionPreview from '../../components/collection-preview/Collection-Preview';
import './shop.scss';

class ShopPage extends Component {
    state={
        collections:ShopData
    };

    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({id, ...collection})=>(<CollectionPreview key={id} {...collection}/>))}
            </div>
        )
    }
}

export default ShopPage;
