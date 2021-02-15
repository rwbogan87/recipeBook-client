import React from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Create.css';

const Create = (props) => {
    const [nameValue, setName] = useState('');
    const [category, setCategory] = useState('');
    const [creator, setCreator] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [notes, setNotes] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/recipe/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }),
            body: JSON.stringify({
                recipe: {
                    name: nameValue,
                    category: category,
                    creator: creator,
                    ingredients: ingredients,
                    instructions: instructions,
                    notes: notes
                }
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    // const Delete = (targetId) => {
    //     console.log('delete fired');
    //     console.log(targetId)
    //     console.log(`targetId ${targetId} deleted`)

    //     const token = localstorage.getItem('token');
    //     fetch(`http://localhost/3000/recipe/delete/${targetId}`)


    // }

    const tokenizer = () => {
        if (!props.token && !localStorage.getItem('token')) {
            return (
                <h1>Login required to create</h1>
            )
        } else {
            return (
                <Form onSubmit={handleSubmit} className="createForm">
                    <h1>Cutting Board</h1>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                            required
                            value={nameValue}
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Category</Label>
                        <Input
                            required
                            value={category}
                            name="category"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Creator</Label>
                        <Input
                            required
                            value={creator}
                            name="creator"
                            onChange={(event) => setCreator(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ingredients (use commas)</Label>
                        <Input
                            required
                            value={ingredients}
                            name="ingredients"
                            onChange={(event) => setIngredients(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Instructions</Label>
                        <Input
                            required
                            value={instructions}
                            name="instructions"
                            onChange={(event) => setInstructions(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Notes</Label>
                        <Input
                            required
                            value={notes}
                            name="notes"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </FormGroup>
                    <Button className="submitButton" type="submit">Submit</Button>
                </Form>
            )
        }

    }

    return (
        <FormGroup>
            {tokenizer()}
        </FormGroup>
    )
}

export default Create;