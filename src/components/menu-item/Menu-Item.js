import React from 'react';
import './Menu-Item.scss';


 const MenuItem = ({imageUrl,title,size}) => {
    return (
    <div className={`${size} menu-item`}>
        <div style={{backgroundImage:`url(${imageUrl})`}}
        className="background-image">   
        </div>
        <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
}
export default MenuItem;