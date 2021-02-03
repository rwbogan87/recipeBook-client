import React from 'react';
import './Card.css';

const Card = ({name, category, creator, id, notes, ingredients}) => {
    return (
        <div key={id} className="recipe">
            <h2>{name}</h2>
            <p>{creator}</p>
            <p>{category}</p>
            <p>{ingredients}</p>
            <p>{notes}</p>
        </div>
    )
}

export default Card;