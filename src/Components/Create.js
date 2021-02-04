import React from 'react';
import { useState } from 'react';

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

    const tokenizer = () => {
        if (!localStorage.token) {
            return (
                <h1>Login required to create</h1>
            )
        } else {
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Create a Recipe</h1>
                        <div>
                            <label>Name</label>
                            <input
                                required
                                value={nameValue}
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Category</label>
                            <input
                                required
                                value={category}
                                name="category"
                                onChange={(event) => setCategory(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Creator</label>
                            <input
                                required
                                value={creator}
                                name="creator"
                                onChange={(event) => setCreator(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Ingredients (use commas)</label>
                            <input
                                required
                                value={ingredients}
                                name="ingredients"
                                onChange={(event) => setIngredients(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Instructions</label>
                            <input
                                required
                                value={instructions}
                                name="instructions"
                                onChange={(event) => setInstructions(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Notes</label>
                            <input
                                required
                                value={notes}
                                name="notes"
                                onChange={(event) => setNotes(event.target.value)}
                            />
                        </div>
                        <button className="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            )
        }

    }

    return (
        <div>
            {tokenizer()}
        </div>
    )
}

export default Create;