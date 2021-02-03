import React from 'react';

const Login = ({ email, password, setEmail, setPassword }) => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input 
                value={email} 
                name="email" 
                onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                value={password} 
                name="password" 
                onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Login;