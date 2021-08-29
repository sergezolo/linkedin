import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div className='header-option' onClick={onClick}>
            {Icon && <Icon className="header-option-icon"/>}
            {avatar && <Avatar className="header-option-icon" src={avatar}/>}
            <h3 className="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOption;