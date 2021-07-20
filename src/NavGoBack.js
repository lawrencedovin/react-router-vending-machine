import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavGoBack.css';

const NavGoBack = ({message}) => {
    return(
        <div className='NavGoBack'>
            <h1>{message}</h1>
            <NavLink exact to='/'>
                GO BACK!
            </NavLink>
        </div>
    );
};

export default NavGoBack;