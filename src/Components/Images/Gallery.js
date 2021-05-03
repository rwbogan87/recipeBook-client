import React from 'react';
import { useState, useEffect } from 'react';

import './style.css'

const ImageDisplay = (props) => {
    const [display, setDisplay] = useState([])

    useEffect(() => {
        if (props.token || localStorage.token) {
            fetch('http://localhost:3000/image/getall', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: props.token || localStorage.token
                })
            })
                .then(res => res.json())
                .then(json => {
                    setDisplay(json)
                    // console.log(json[0].url);
                    // console.log(json)
                    return
                })
        } else {
            console.log('no token')
        }
    }, [props.token || localStorage.getItem('token')])



    const destination = document.getElementById('gallery')
    display.forEach(function (each) {
        const frameCanvas = document.createElement('div');
        frameCanvas.setAttribute('id', 'frameCanvas')
        destination.appendChild(frameCanvas)

        const frame = document.createElement('img');
        frame.setAttribute('id', 'frame')
        frame.setAttribute('href', each.url)
        frame.src = each.url
        frameCanvas.appendChild(frame)

        const noteTag = document.createElement('p');
        noteTag.setAttribute('id', 'noteTag');
        noteTag.textContent = each.note;
        frameCanvas.appendChild(noteTag)

        const dateTag = document.createElement('p');
        dateTag.setAttribute('id', 'dateTag')

        //convert ugly date into pretty date
        let date = new Date(`${each.createdAt}`);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let prettyDate = (year + '-' + month + '-' + dt)
        //
        
        dateTag.textContent = prettyDate
        frameCanvas.appendChild(dateTag)
    })
    return (
        <>
            <div id="gallery"></div>
            {/* <img src={display}/> */}
        </>

    )
    // const count =

    // const tokenizer = () => {
    //     // no token prop and no localstorage? login required
    //     // token prop or localstorage usable? Allow view
    //     // 
    //     return (
    //         !props.token ? <h1>Login required to view</h1>
    //             : props.token && display.length > 0 ?
    //                 <div>
    //     <h4>Recipe count: {display.length}</h4>
    //     <h5>a-z (name)</h5>

    //                     {display.map(recipe =>
    //                         <Recipe key={recipe.id}
    //                             recipe={recipe}
    //                             name={recipe.name}
    //                             creator={recipe.creator}
    //                             category={recipe.category}
    //                             ingredients={recipe.ingredients}
    //                             instructions={recipe.instructions}
    //                             notes={recipe.notes}
    //                             id={recipe.id}
    //                             userEmail={recipe.userEmail}
    //                             token={props.token}
    //                         />
    //                     )}
    //                 </div>
    //                     : <div>Please sign in or create an account to continue.</div>
    //     )
    // }
    // return (
    //     <div>
    //         {tokenizer()}
    //     </div>
    // )
}
export default ImageDisplay;



