import React from 'react';
import './VendingMachine.css';
import vendingMachineImg from './vending-machine.png';

import { NavLink } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})`}}>
            <div className="VendingMachine__container VendingMachine__container--left">
                <h1>HELLO I AM A VENDING MACHINE WHAT WOULD YOU LIKE TO EAT?</h1>
            </div>
            <div className="VendingMachine__container VendingMachine__container--right">
                <NavLink exact to='soda'>
                    SODA
                </NavLink>
                <NavLink exact to='chips'>
                    CHIPS
                </NavLink>
                <NavLink exact to='sardines'>
                    SARDINES
                </NavLink>
            </div>
        </div>
    );
};

export default VendingMachine;