import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Image/Screen-Shot-2017-08-17-at-10.04.531.png'
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className='header'>
           <IconButton > 
               <PersonIcon fontSize="large"></PersonIcon>
           </IconButton>
     <IconButton>   <img className="header_logo" src={logo} alt=""/></IconButton>
        <IconButton>
            <ForumIcon fontSize='large'></ForumIcon ></IconButton>
        </div>
    );
};

export default Header;