import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);

    return (
        <div className='header-option' onClick={onClick}>
            {Icon && <Icon className="header-option-icon"/>}
            {avatar && <Avatar className="header-option-icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
            <h3 className="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOption;