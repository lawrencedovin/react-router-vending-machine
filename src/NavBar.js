import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to='/'>
                Home
            </NavLink>
            
            <NavLink exact to='/soda'>
                Soda
            </NavLink>

            <NavLink exact to='/chips'>
                Chips
            </NavLink>

            <NavLink exact to='/sardines'>
                Sardines
            </NavLink>
        </nav>
    );
};

export default NavBar;