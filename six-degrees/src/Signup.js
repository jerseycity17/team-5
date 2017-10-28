import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {FormGroup, Form, Col, FormControl, ControlLabel, Button, } from 'react-bootstrap';
import {Link} from 'react-router';

const Signup = function (props){
  return(
      <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={1}>
        First Name
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="First name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={1} >
        Last Name
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Last name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={1}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={1}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={1} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>

  );
};


export default Signup;
