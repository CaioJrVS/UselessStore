import React from 'react';

import classes from './Card.module.css'

const card = (props)=>{
    
    console.log(props)
    return (
        <div className = {classes.Card}>
            <div className={classes.CardImage}>
                <img src={props.image} alt ={props.name}/>
            </div>
            <div id = "price">
                <p> {props.price}</p>
            </div>
            <div id = "title">
                <p>{props.name}</p>
            </div>
        </div>
    )

}

export default card;