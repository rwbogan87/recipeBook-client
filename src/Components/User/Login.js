import React from 'react';
import { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password
                }
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data.message);
                if (data.message == "Wrong password") {
                    alert("Wrong password")
                } else if (!data.user) {
                    alert("No user matches your query, please try again")
                } else {
                    props.newToken(data.token);
                    localStorage.setItem('activeUser', data.user.email)
                    window.location.reload(false);
                    console.log('New user created: ', data);
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input
                        required
                        value={email}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        required
                        value={password}
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;