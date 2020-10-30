import React from 'react';

import classes from "./Toolbar.module.css"

const header = () => {
    return (
        <header className={classes.Header}>
            <div>Logo</div>
            <div>SearchBar</div>
            <ul >
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