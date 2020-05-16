import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieApp from './components/MovieApp';
import Details from './components/Details.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={MovieApp} />
          <Route exact path='/:Details' component={Details} />
        </div>
      </Router>

    );

  }
}

export default App;
