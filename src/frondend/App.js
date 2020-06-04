import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieApp from '../components/MovieApp';
import Details from '../components/Details.js';
import notFound from '../components/404.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route exact path='/' component={MovieApp} />
            <Route exact path='/notFound' component={notFound} />
            <Route exact path='/:movieId' component={Details} />
            
          </Switch>
        </div>

      </Router>

    );

  }
}

export default App;
