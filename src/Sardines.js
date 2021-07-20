import React from 'react';
import NavGoBack from './NavGoBack';
import './Sardines.css';

const Sardines = () => {
    return (
        <div className="Sardines" style={{ backgroundImage:"url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"}}>
            <NavGoBack message='YUMMMM SARDINES'/>
        </div>
    );
};

export default Sardines;