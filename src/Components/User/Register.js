import React from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                user:{
                email: email,
                password: password
                }
            })
        }).then(response => response.json())
            .then(data => {
                props.newToken(data.sessionToken);
                localStorage.setItem('activeUser', data.user.email);
                // window.location.reload(false);
                console.log('New user created: ', data);
            })
    }
    return (
            <Form onSubmit={handleSubmit}>
                <h3>Register</h3>
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
                <Button outline color="primary" className="submitButton" type="submit">Create Account</Button>
            </Form>
    )
}

export default Register;