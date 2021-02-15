import React from 'react';
import { Button } from 'reactstrap';
import './navAppDisplay.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';

import Display from '../Display';



const navAppDisplay = () => {
    return (
        <Button className="cardButton" href="/Display">Browse Collection</Button>
    )
}

export default navAppDisplay;