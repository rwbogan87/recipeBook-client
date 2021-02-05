import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

const DisplayAll = (props) => {
    const [display, setDisplay] = useState([
        {
            "id": 0,
            "name": "Please log in or create an account"
        }
    ])

        useEffect(() => {
            if (props.token || localStorage.getItem('token')) {
            fetch('http://localhost:3000/recipe/getall', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token || localStorage.getItem('token')
                })
            })
                .then(res => res.json())
                .then(json => {
                    setDisplay(json)
                })} else {
                    console.log('Error: Login Required')
                }
        }, [])

    return (
        <div>
        <>
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
            </>
        </div>
    )
}

export default DisplayAll;