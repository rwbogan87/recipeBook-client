import React from 'react';
import splashKitchen from '../Assets/kitchen1.jpg';
import './Splash.css';

const Splash = () => {
    return (
        <div className="splashDiv">
        <br />
            <img src={splashKitchen} alt="clean kitchen with ipad showing recipe" />
        </div>
    )
}

export default Splash