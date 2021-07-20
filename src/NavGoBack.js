import React from 'react';
import { NavLink } from 'react-router-dom';

const NavGoBack = () => {
    return(
        <NavLink exact to='/'>
            GO BACK!
        </NavLink>
    );
};

export default NavGoBack;