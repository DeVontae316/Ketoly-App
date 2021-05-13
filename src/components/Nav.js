import React from 'react';
import {
    Link
} from "react-router-dom";
import CartTotal from './CartTotal';

function Nav(props) {
    return (
        <nav className="nav">
            <div className="logo-img-container">
                <img className="nav-logo" src="/logo3.png" alt="" />
            </div>
            <div className="links-section">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/cart"><CartTotal /></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;