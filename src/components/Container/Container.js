import React from 'react';

import classes from './Container.module.css'
import Card from './Card/Card'

const container = (props)=>{
    let cardHolder = {};

    if (props.product !== {}) {
        cardHolder = Object.keys(props.products).map(
             i => {
                return <Card name={props.products[i].title}
                    price={props.products[i].price}
                    image={props.products[i].image}
                    key={props.products[i].id}
                />
            }
        )
    }

    return(
        <div className={classes.Container}>
            {cardHolder}
        </div>
    )
}

export default container;