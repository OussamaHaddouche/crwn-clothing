import React from 'react';
import './Collection-Preview.scss';
import CollectionItem from '../collection-item/Collection-item';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="preview">
            <h1 className="preview-title">{title.toUpperCase()}</h1>
            <div className="preview-items">
                {items.filter((item, index)=> index < 4 ).map(item=><CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default CollectionPreview;