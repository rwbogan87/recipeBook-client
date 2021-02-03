import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';

const Auth = () => {
    const [toggler, setToggler] = useState(false);
    const [email, setEmail] = useState("rbogan");
    const [password, setPassword] = useState("password");

    useEffect(() => {
        console.log(email, password)
    })

    return (
        <div>
            <Register
                setEmail={setEmail}
                email={email}
                password={password}
                setPassword={setPassword}
            />
            <Login
                setEmail={setEmail}
                email={email}
                password={password}
                setPassword={setPassword}
            />
        </div>
    )
}

export default Auth;