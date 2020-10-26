import React , {Component}from 'react';

import Aux from '../hoc/Aux'
import Container from '../components/Container/Container'
import classes from './Store.module.css';

class Store extends Component{
    
    componentDidMount(){
        let response;
        const url = "https://fakestoreapi.com/products?limit=2";
        fetch(url).then(res=>res.json()).then(json=>this.setState({products:json}));
    }

    state = {
        products:{}
    };

    render(){
        console.log('state',this.state)
        return(
            <div className={classes.Store}>
                <Container products={this.state.products} />
            </div>
        )
    }

}
export default Store;