import React from 'react';

import Logo from '../../Logo/Logo'

import classes from "./Toolbar.module.css"

const header = () => {
    return (
        <header className={classes.Header}>
            <Logo />
            <input className={classes.Search}type="search" placeholder="Search"/>
            <ul style={{color:"white"}}>
                <nav>
                    <li style={{ display: 'inline', padding: "14px 16px" }}><a>
                        Carrinho</a>
                    </li>
                    <li style={{ display: 'inline', padding: "14px 16px" }}>
                        <a>Usuario</a>
                    </li>
                </nav>
            </ul>
        </header>
    )
}

export default header;