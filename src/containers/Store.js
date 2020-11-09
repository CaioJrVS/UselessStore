import React , {Component}from 'react';

import Container from '../components/Container/Container'
import classes from './Store.module.css';

class Store extends Component{
    
    componentDidMount(){
        const url = "https://fakestoreapi.com/products";
        fetch(url).then(res=>res.json()).then(json=>this.setState({products:json}));
    }

    state = {
        products:{}
    };

    render(){
        return(
            <div className={classes.Store}>
                <Container products={this.state.products} />
            </div>
        )
    }

}
export default Store;