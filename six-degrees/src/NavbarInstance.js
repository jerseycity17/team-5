import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';
var Alert = require('react-bootstrap').Alert;


const NavbarInstance = function (props){
  return(

  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>6 Degrees</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
        <NavItem eventKey={1} href="sign-up">Sign up</NavItem>
        <NavItem eventKey={2} href="sign-in">Sign in</NavItem>
      </Nav>
  </Navbar>
  );
};

export default NavbarInstance;