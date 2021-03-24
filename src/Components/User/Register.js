import React from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let validateEmail = (data) => {
        const val = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(val.test(data))
        return (val.test(data));
    }

    const validate = () => {
        let x
        if (validateEmail(email) === true && password.length >= 8) {
            console.log('valid')
            x = true;
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters')
            x = false;
        }
        else {
            console.log('invalid')
            x = false;
        }
        return x;
    }

    let handleSubmit = (event) => {
        if (validate() === true) {
        event.preventDefault();
        fetch(`http://localhost:3000/user/create`, {
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
                props.newToken(data.sessionToken);
                localStorage.setItem('activeUser', data.user.email);
                window.location.reload(false);
                console.log('New user created: ', data);
            })
    } else {
        alert('Please use a valid email address')
    }
}
    
    

    return (
        <div className="container">
            <Form onSubmit={handleSubmit} className="authFrame">
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        required
                        value={email}
                        name="email"
                        type="email"
                        placeholder="newaccount@email.com"
                        onChange={(event) => {
                            validateEmail(event.target.value)
                            setEmail(event.target.value)
                            }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="ppasswordsw">Password</Label>
                    <Input
                        required
                        value={password}
                        name="password"
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </FormGroup>
                <Button outline color="primary" className="submitButton" type="submit" value="Submit">Create Account</Button>
            </Form>
        </div>
    )
}

export default Register;