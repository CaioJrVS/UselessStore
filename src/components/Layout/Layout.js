import React from 'react';

import Header from '../UI/Header/Header'
import Footer from '../UI/Footer/Footer'
import Aux from '../../hoc/Aux'

const layout = (props)=>{
    return(
        <Aux>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default layout;