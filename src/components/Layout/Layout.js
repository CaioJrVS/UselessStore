import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Footer from '../Footer/Footer'
import Aux from '../../hoc/Aux'

const layout = (props)=>{
    return(
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default layout;