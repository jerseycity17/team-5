import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router';

var Alert = require('react-bootstrap').Alert;



class NavbarInstance extends Component {
  render(){
  return(
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>6 Degrees</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} Link="/src/Feed">Feed</NavItem>
      <NavItem eventKey={2} Link="/src/Profile">Profile</NavItem>
      <NavItem eventKey={3} id="nametag">{this.props.firstName}</NavItem>
      <NavItem eventKey={4} id="nametag">{this.props.lastName}</NavItem>
    </Nav>
  </Navbar>

  )
}
}

export default NavbarInstance;