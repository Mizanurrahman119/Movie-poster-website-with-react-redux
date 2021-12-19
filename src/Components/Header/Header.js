import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from "../../Images/user__logo.png";
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            
            <div className="user-image">
                <img src={userLogo} alt="user" />
            </div>
        </div>
    );
};

export default Header;