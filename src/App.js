import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieApp from './MovieApp.js';
import Details from './Details.js';
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
