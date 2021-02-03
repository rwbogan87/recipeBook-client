import React from 'react';
import './Card.css';

const Card = ({name, category, creator, id, notes, ingredients}) => {
    const tester=()=>{
        console.log('awesome');
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
            })
    }

    return (
        <div key={id} className="recipe">
            <h2 onClick={tester}>{name}</h2>
            <p>{creator}</p>
            <p>{category}</p>
            <p>{ingredients}</p>
            <p>{notes}</p>
        </div>
    )
}

export default Card;