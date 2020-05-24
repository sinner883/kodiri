import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

    constructor() {
        super();
        this.state ={
            welcomeMessage: 'This page is in progress! Stay tuned!'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'The best is yet to come!'
            })
           
        }, 3000);
    }
        
    render(){
        return (
            <div>
                <h3>{this.state.welcomeMessage}</h3>
                <Link to='/'>Go back!</Link>
            </div>
        )
    }
}

// 1. introducing the component state