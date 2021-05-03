import React from 'react';
import { useState, useEffect } from 'react';
import Recipe from './Card';

const DisplayAll = (props) => {
    const [display, setDisplay] = useState([])

    useEffect(() => {
        if (props.token) {
            fetch('http://localhost:3000/recipe/getall', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: props.token || localStorage.getItem('token')
                })
            })
                .then(res => res.json())
                .then(json => {
                    json.error == "Not authorized" ? console.log('worked') : 
                    json.sort(function (a, b) {
                        let varA = a.name.toUpperCase();
                        let varB = b.name.toUpperCase();
                        return (varA < varB) ? -1 : (varA > varB) ? 1 : 0;
                    })
                    setDisplay(json)
                    console.log(json);
                    return
                })
        } else {
            console.log('no token')
        }
    }, [props.token])


    // const count =

    const tokenizer = () => {
        // no token prop and no localstorage? login required
        // token prop or localstorage usable? Allow view
        // 
        return (
            !props.token ? <h1>Login required to view</h1>
                : props.token && display.length > 0 ?
                    <div>
        <h4>Recipe count: {display.length}</h4>
        <h5>a-z (name)</h5>

                        {display.map(recipe =>
                            <Recipe key={recipe.id}
                                recipe={recipe}
                                name={recipe.name}
                                creator={recipe.creator}
                                category={recipe.category}
                                ingredients={recipe.ingredients}
                                instructions={recipe.instructions}
                                notes={recipe.notes}
                                id={recipe.id}
                                userEmail={recipe.userEmail}
                                token={props.token}
                            />
                        )}
                    </div>
                        : <div>Please sign in or create an account to continue.</div>
        )
    }
    return (
        <div>
            {tokenizer()}
        </div>
    )
}
export default DisplayAll;


const array = ['one', 'two', 'three', 'one']

const newArray = [...new Set(array)]

console.log(newArray[0])