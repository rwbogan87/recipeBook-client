import React, { useState, useEffect } from 'react';
import Display from './navAppDisplay';
import Craft from './navAppCraft';


const navAppHub = () => {
    return (
        <>
        <Display />
        <Craft />
        </>
    )
}

export default navAppHub