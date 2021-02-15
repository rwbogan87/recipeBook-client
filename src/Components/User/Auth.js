import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import { Form, Button } from 'reactstrap';
import './User.css';
import NavAppHub from '../navApps/navAppHub';

const Auth = (props, {routes}) => {
    const [toggler, setToggler] = useState(false);


    useEffect(() => {
        console.log({routes})
    })

    if (!localStorage.getItem('token')) {
        return (
            <div className="authDiv">
                <button href="/login" className={"link"} onClick={() => setToggler(!toggler)}>{toggler ? 'Have an account? Click Here' : 'New User? Click Here'}</button>
                {toggler ? (
                        <Register
                            newToken={props.updateToken}
                    />) : (
                        <Login
                            newToken={props.updateToken}
                        />
                    )}
            </div>
        )
    } else {
        return (
            <NavAppHub />
        )
    }
}

export default Auth;