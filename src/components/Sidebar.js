import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E16AQF_R1a1IA4Sew/profile-displaybackgroundimage-shrink_200_800/0/1613154473682?e=1635379200&v=beta&t=iJN3kXIDz4JpC88ReePVV_laYr5Xxi7mS9R0Io9iZe0" 
                    alt="background-img"
                />
                <Avatar className="sidebar-avatar" src={user?.photoUrl}>{user?.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-stat-num">XX</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-stat-num">XX</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Resent</p>
                {recentItem('reactjs')}
                {recentItem('vanillajs')}
                {recentItem('python')}
                {recentItem('rubyonrails')}
                {recentItem('java')}
            </div>
        </div>
    )
}

export default Sidebar;
