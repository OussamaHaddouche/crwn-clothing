import React, { Component } from 'react'
import './Directory.scss';
import MenuItem from '../menu-item/Menu-Item';
import sections from './sections_data';
 class Directory extends Component {
    state={
        sections:sections
    }
    render(){
        return (
            <div className="directory-menu">
            {this.state.sections.map(({id,imageUrl,title,size})=> <MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>)}
            </div>
        )
    }  
}

export default Directory;