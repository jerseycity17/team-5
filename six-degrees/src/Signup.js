import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {FormGroup, Form, Col, FormControl, ControlLabel, Button, } from 'react-bootstrap';
import {Link} from 'react-router';

class Signup extends Component {
  render() {
    return(
      <div class="container" id="signup-form">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="First name" onChange={this.props.onFirstNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2} >
              Last Name
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Last name" onChange={this.props.onLastNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Email" onChange={this.props.onEmailChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="Password" onChange={this.props.onPasswordChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={10}>
              <Button type="submit" onClick={this.props.onSubmitClick}>
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>

    );
  }
};


export default Signup;
