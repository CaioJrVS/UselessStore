import React from 'react';

const container = (props)=>{
    return(
        <div style={{"box-size":"border-box"}}>
            {props.children}
        </div>
    )
}

export default container;