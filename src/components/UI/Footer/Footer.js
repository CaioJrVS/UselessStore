import React from 'react';

import classes from './Footer.module.css'

const footer = ()=>{
    return (
        <div className={classes.Footer}>
        <footer>
          <p>Author:</p>
          <address property="email">
            <a href="email@email.com">email@email.com</a>
          </address>
        </footer>
        </div>
    )
}

export default footer;