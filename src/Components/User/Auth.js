import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';

const Auth = (props) => {
    const [toggler, setToggler] = useState(false);
    const [email, setEmail] = useState("rbogan");
    const [password, setPassword] = useState("password");


    useEffect(() => {
        // console.log(localStorage.token)
    })

    if (!localStorage.getItem('token')) {
        return (
            <div className="auth">
                <button href="/login" className={"link"} onClick={() => setToggler(!toggler)}>{toggler ? 'Existing Users' : 'New Users'}</button>
                {toggler ? (
                    <Register
                        setEmail={setEmail}
                        email={email}
                        password={password}
                        setPassword={setPassword}
                        newToken={props.updateToken}
                    />) : (
                        <Login
                            setEmail={setEmail}
                            email={email}
                            password={password}
                            setPassword={setPassword}
                            newToken={props.updateToken}
                        />
                    )}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Active user: {localStorage.getItem('activeUser')}</h1>
            </div>
        )
    }
}

export default Auth;