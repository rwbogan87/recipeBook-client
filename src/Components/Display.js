import React from 'react';
import { useState, useEffect } from 'react';
import Recipe from './Card';

const DisplayAll = (props) => {
    const [display, setDisplay] = useState([])

    useEffect(() => {
        if (props.token || localStorage.getItem('token')) {
            fetch('http://localhost:3000/recipe/getall', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: props.token || localStorage.getItem('token')
                })
            })
                .then(res => res.json())
                .then(json => {
                    // console.log(json)
                    // sort all the recipes alphabetically before setting state
                    json.sort(function (a, b) {
                        let varA = a.name.toUpperCase();
                        let varB = b.name.toUpperCase();
                        return (varA < varB) ? -1 : (varA > varB) ? 1 : 0;
                    })
                    setDisplay(json)
                    // console.log(json)
                })
        } else {
            console.log('no token')
        }
    }, [props.token])

    const tokenizer = () => {
        // no token prop and no localstorage? login required
        // token prop or localstorage usable? Allow view
        // 
        return (
            !props.token ? <h1>Login required to view</h1>
                : props.token && display.length > 0 ?
                    <div>
                        {display.map(recipe =>
                            <Recipe key={recipe.id}
                                name={recipe.name}
                                creator={recipe.creator}
                                category={recipe.category}
                                ingredients={recipe.ingredients}
                                notes={recipe.notes}
                                id={recipe.id}
                                userEmail={recipe.userEmail}
                                token={props.token}
                            />
                        )}
                    </div>
                        : <div>unexpected error</div>
        )
    }
    return (
        <div>
            {tokenizer()}
        </div>
    )
}
export default DisplayAll;