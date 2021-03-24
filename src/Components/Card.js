import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import swal from 'sweetalert';
import './Card.css';

const Recipe = ({ recipe, name, category, creator, id, userEmail, notes, instructions, ingredients, token }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)



    const deleteRecipe = () => {
        if (userEmail === localStorage.getItem('activeUser')) {
            fetch(`http://localhost:3000/recipe/${id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            })
                .then(res => {
                    console.log(res);
                })
        } else {
            console.log('')
            return;
        }
    }

    const confirmFunction = () => {
        // let txt;
        // let x = window.confirm("This is permanent. Continue?");
        // if (x == true) {
        //     deleteRecipe()
        // } else {
        //     txt = "Delete cancelled";
        // }
        // return
        swal("This cannot be undone.", "...Are you sure?", "info", {
            buttons: {
                cancel: ""
            }
        })
            .then((value) => {
                if (value === true) {
                    swal(`${value}, recipe deleted`)
                    deleteRecipe()
                } else {
                    swal("recipe not deleted")
                    return
                }
            }).then(window.location.reload(false))
    }

    const capitalize = (data) => {
        if (data) {
            return data.charAt(0).toUpperCase() + data.slice(1)
        } else {
            return 'Unknown creator'
        }
    }


    const favArray = new Set();
    const favFunction = () => {
            favArray.add(recipe)
            console.log(favArray)
    }

    return (
        <>
            <Card key={id} className="recipe">
                <Button onClick={toggle} className="collapseButton">
                    <span className="titleText">{capitalize(name)}</span><br /> by <span className="nameText">{capitalize(creator)}</span>
                </Button>

                <Button onClick={favFunction} className="favoritesButton">Add to Favorites</Button>

                <Collapse isOpen={isOpen}>
                    {/* <CardBody className="cardBody">{name}</CardBody>
            <CardBody className="cardBody">{creator}</CardBody> */}
                    <CardBody className="cardBody">{category}</CardBody>
                    <p>Category</p>
                    <CardBody className="cardBody">{ingredients}</CardBody>
                    <p>Ingredients</p>
                    <CardBody className="cardBody">{instructions}</CardBody>
                    <p>Instructions</p>
                    <CardBody className="cardBody">{notes}</CardBody>
                    <p>Notes</p>
                    {/* <CardBody className="cardBody">{id}</CardBody> */}
                    <CardBody className="cardBody">submitted by {userEmail}</CardBody>
                    <Button onClick={() => { confirmFunction() }} className="deleteButton">Delete</Button>
                    {/* <Button onClick={() => { () }} className="updateButton">Change</Button> */}
                </Collapse>
            </Card>
        </>
    )
}

export default Recipe;