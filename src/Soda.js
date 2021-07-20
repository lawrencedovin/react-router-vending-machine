import React from 'react';
import NavGoBack from './NavGoBack';
import './Soda.css';

const Soda = () => {
    return (
        <div className="Soda" style={{ backgroundImage:"url(https://media.giphy.com/media/kOGXmjbBqyzdu/giphy.gif)"}}>
            <NavGoBack message='SODAAAAAAA' />
        </div>

    );
};

export default Soda;