import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin-icon" 
                />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={GroupIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={SmsIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFzG-gEFc2I2Q/profile-displayphoto-shrink_100_100/0/1613158890439?e=1635379200&v=beta&t=8HQ9d0vILon-tvZhVRuFvohsucNWCck6MH_nVjBbJbs" title="me" />
            </div>
        </div>
    )
}

export default Header;