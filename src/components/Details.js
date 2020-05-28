import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovie from './getMovieApp';
import './Details.css';

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
        if (this.state.movie === undefined) {
            return <Redirect to='/notFound' />;
        } else {
            return (
                <div className="Details">
                    <h3>{this.state.movie.name}</h3>
                    <div className="details__container">{this.state.movie.syponsis}
                    </div>
                    <img
                        src={this.state.movie.logo}
                        alt={this.state.movie.name} />
                    <div>
                        <Link to='/'>Go back!</Link>
                    </div>
                </div>

            )
        }

    }
}
// 1. introducing the component state