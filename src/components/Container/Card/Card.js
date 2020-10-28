import React from 'react';

import classes from './Card.module.css'

const card = (props)=>{
    
    console.log(props)
    return (
        <div className = {classes.Card}>
            <div className={classes.CardImage}>
                <img src={props.image} alt ={props.name}/>
            </div>
            <div className={classes.CardDescription}>
                <div className = {classes.title}>
                    <p>{props.name}</p>
                </div>
                <div className = {classes.CardPrice}>
                    <p> RS {props.price}</p>
                </div>
            </div>
        </div>
    )

}

export default card;