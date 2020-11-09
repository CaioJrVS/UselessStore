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
          Icons made by <a href="http://www.google.com/" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </footer>
        </div>
    )
}

export default footer;