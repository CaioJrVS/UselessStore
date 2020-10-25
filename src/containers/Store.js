import React , {Component}from 'react';

import Aux from '../hoc/Aux'
import Container from '../components/Container/Container'

class Store extends Component{
    
    componentDidMount(){
        const url = "https://fakestoreapi.com/products";
        fetch(url).then(res=>res.json()).then(json=>this.setState({products:json}));
    }

    state = {
        products:{}
    };

    render(){
        console.log(this.state)
        return(
            <Aux>
                <Container />
            </Aux>
        )
    }

}
export default Store;