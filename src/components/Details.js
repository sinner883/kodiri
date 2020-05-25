import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovie from './getMovieApp';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovie().find(function (movie) {
            return movie.id === movieId;
        });
        this.setState({
            movie: movie
        })
    }

    render() {
        if (this.state.movie === undefined){
            return <Redirect to = '/notFound' />;
        } else {
            return (
                <div>
                    <h3>{this.state.movie.name}</h3>
                    <Link to='/'>Go back!</Link>
                </div>
            )
        }
        
    }
}
// 1. introducing the component state