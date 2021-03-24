import React from 'react';
import { Button } from 'reactstrap';
import './navAppDisplay.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';

import Display from '../Display';



const navAppCraft = () => {
    return (
        <Button className="cardButton" href="/Create"><p>Creation Room</p></Button>
    )
}

export default navAppCraft;