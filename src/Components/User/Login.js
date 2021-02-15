import React from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                if (data.message === "Wrong password") {
                    alert("Wrong password")
                } else if (!data.user) {
                    alert("No user matches your query, please try again")
                } else {
                    localStorage.setItem('activeUser', data.user.email)
                    // window.location.reload(false);
                    props.newToken(data.token);
                    console.log('User logged in: ', data);
                }
            })
    }
    return (
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        required
                        value={email}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        required
                        value={password}
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </FormGroup>
                <Button outline color="primary" className="submitButton" type="submit">Log In Existing User</Button>
            </Form>
    )
}

export default Login;