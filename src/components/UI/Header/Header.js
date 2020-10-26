import React from 'react';

import classes from "./Header.module.css"

const header = ()=>{
    return(
        <header className={classes.Header}>
            <nav>
                <a href='#'>Logo</a> |
          <a href='#'>SearchBar</a>|
          <a href='#'>carrinho</a>|
          <a href='#'>usuario</a>|
        </nav>
        </header>
    )
}

export default header;