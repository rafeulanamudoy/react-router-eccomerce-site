import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='head-container'>
            <img src={logo} alt="" />

            <div className='navigation-container'>
                <Link to="/order">Order</Link>
                <Link to="/orderReveiw">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>

        </nav>
    );
};

export default Header;