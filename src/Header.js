import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import gmailLogo from './image/gmailLogo.png';
import AppsIcon from '@material-ui/icons/Apps';
import { ArrowDropDown } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Header = () => {
    return (
        <div className="header">

            <div className="headerLeft">
               <IconButton><MenuIcon/></IconButton>
               <img src={gmailLogo}/>
            </div>

            <div className="headerMiddle">
                <SearchIcon/>
                <input placeholder="search mail" type="text"></input>
                <ArrowDropDown className="headerInputArrow"/>
            </div>

            <div className="headerRight">
           
                <IconButton><AppsIcon/></IconButton>
                <IconButton><NotificationsIcon/></IconButton>
                <Avatar/>
           
            </div>
            
           
        </div>
    );
};

export default Header;