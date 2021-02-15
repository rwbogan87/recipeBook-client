import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Card.css';

const Recipe = ({ name, category, creator, id, userEmail, notes, ingredients }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle=()=>setIsOpen(!isOpen);

    const deleteRecipe = () => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3000/recipe/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        })
        .then(res => {
            console.log(res);
            console.log(res.status)
            if (res.status === 401) {
                alert('You may only delete your own recipes')
                toggle();
            }
            else {
            window.location.reload(false);
            }
        })
        }

    const capitalize = (data) => {
        if (data) {
        return data.charAt(0).toUpperCase() + data.slice(1)
        } else {
            return 'Unknown creator'
        }
    }

    return (
        <Card key={id} className="recipe">
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
            {capitalize(name)} by {capitalize(creator)}
            </Button>
            <Collapse isOpen={isOpen}>
            {/* <CardBody>{name}</CardBody>
            <CardBody>{creator}</CardBody> */}
            <CardBody>{category}</CardBody>
            <CardBody>{ingredients}</CardBody>
            <CardBody>{notes}</CardBody>
            <CardBody>{id}</CardBody>
            <CardBody>submitted by {userEmail}</CardBody>
            <Button onClick={() => { deleteRecipe() }}>Delete</Button>
            </Collapse>
        </Card>
    )
}

export default Recipe;