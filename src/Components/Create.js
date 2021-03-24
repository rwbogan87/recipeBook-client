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
                if (data.error == "Not authorized") {
                    window.confirm("Please log in or create an account to continue")
                } else {
                window.confirm("Recipe added!")
                }
            })
    }


    const tokenizer = () => {
        if (!props.token && !localStorage.getItem('token')) {
            return (
                <h1>Login required to create</h1>
            )
        } else {
            return (
                <Form onSubmit={handleSubmit} className="createForm">
                    <p id="feedback"></p>
                    <h4>Submission Form</h4>
                    <FormGroup className="formGroup">
                        {/* <Label>Dish Name</Label> */}
                        <Input
                            required
                            value={nameValue}
                            name="name"
                            placeholder="Dish Name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="formGroup">
                        {/* <Label>Category</Label> */}
                        <Input
                            required
                            value={category}
                            name="category"
                            placeholder="Category"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="formGroup">
                        {/* <Label>Original Creator</Label> */}
                        <Input
                            required
                            value={creator}
                            name="creator"
                            placeholder="Creator"
                            onChange={(event) => setCreator(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="formGroup">
                        {/* <Label>Ingredients (use commas)</Label> */}
                        <Input
                            required
                            value={ingredients}
                            name="ingredients"
                            type="textarea"
                            placeholder="Ingredients"
                            onChange={(event) => setIngredients(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="formGroup">
                        {/* <Label>Instructions</Label> */}
                        <Input
                            required
                            value={instructions}
                            name="instructions"
                            type="textarea"
                            placeholder="Instructions"
                            onChange={(event) => setInstructions(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="formGroup">
                        {/* <Label>Notes</Label> */}
                        <Input
                            required
                            value={notes}
                            name="notes"
                            placeholder="Notes"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </FormGroup>
                    <Button className="submitButton" type="submit">Submit</Button>
                </Form>
            )
        }

    }

    return (
        <FormGroup className="formGroup">
            {tokenizer()}
        </FormGroup>
    )
}

export default Create;