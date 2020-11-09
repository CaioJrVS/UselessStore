import React from 'react';

import classes from './Card.module.css'

const card = (props)=>{
    
    return (
        <div className = {classes.Card}>
            <div className={classes.CardImage}>
                <div className={classes.Wrapper}>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
            <div className={classes.CardDescription}>
                <div className = {classes.CardTitle}>
                    <p>{props.name}</p>
                </div>
                <div className = {classes.CardPrice}>
                    <p> $ {props.price}</p>
                </div>
            </div>
        </div>
    )

}

export default card;