import React, { Component } from 'react';
import { BrowserRouter, Route , Switch, Link} from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';
import NavbarInstance from "./NavbarInstance.js";
import CarouselInstance from "./CarouselInstance";

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
      <div className="App">
      <NavbarInstance/>
        <header className="App-header">
          <img src="https://pbs.twimg.com/profile_images/907642405683290114/E2FU6vic.jpg"className="App-logo"/>
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          <CarouselInstance/>
        </p>
     

      <Switch>
        //insert routes
      </Switch> 
      </div>
    );
  }
}

export default App;
