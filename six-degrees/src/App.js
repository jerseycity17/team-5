import React, { Component } from 'react';
import { BrowserRouter, Route , Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signed_in: false,
      userId: null,
    };
  }
  render() {
    return (
      <Switch>
        //insert routes
      </Switch>
    );
  }
}

export default App;
