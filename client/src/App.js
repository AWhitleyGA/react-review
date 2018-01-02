import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import CoinIndex from './views/CoinIndex'
import CoinShow from './views/CoinShow'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/coins">Dashboard</Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact path="/coins"
              component={CoinIndex}
            />
            <Route
              path="/coins/:symbol"
              component={CoinShow}
            />
            <Route
              path="/*"
              render={() => (
                <Redirect
                  to="/coins"
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
