import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

const DisplayAll = () => {
    const [display, setDisplay] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/recipe/getall', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEyMzU2MTE3LCJleHAiOjE2MTI0NDI1MTd9.eSGdtgrb1-Hk6r4olWHhvwFy_Uo72bO58w8q6NgEgYA'
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setDisplay(json)
            })
    }, [])

    return (
        <div>
            {display.map(recipe =>
                <Card key={recipe.id}
                    name={recipe.name}
                    creator={recipe.creator}
                    category={recipe.category}
                    ingredients={recipe.ingredients}
                    notes={recipe.notes}
                    id={recipe.id}
                />
            )}
        </div>
    )
}

export default DisplayAll;