import React from 'react';
import './VendingMachine.css';

import { NavLink } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <NavLink exact to='soda'>
                Soda
            </NavLink>
            <NavLink exact to='chips'>
                Chips
            </NavLink>
            <NavLink exact to='sardines'>
                Fresh Sardines
            </NavLink>
        </div>
    );
};

export default VendingMachine;