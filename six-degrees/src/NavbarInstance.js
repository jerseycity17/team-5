import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
var Alert = require('react-bootstrap').Alert;

class NavbarInstance extends Component {
  render(){
  return(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>6 Degrees</a>
      </Navbar.Brand>
    <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Email" onChange={this.props.handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Password" onChange={this.props.handlePasswordChange}/>
        </FormGroup>
        {' '}
        <button onClick={this.props.onLoginButtonClick}>Login</button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
  )
}
}

export default NavbarInstance;