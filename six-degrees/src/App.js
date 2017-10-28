import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarInstance from "./NavbarInstance.js";
import LoggedInNavbarInstance from "./LoggedInNavbarInstance.js";
import CarouselInstance from "./CarouselInstance.js";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      signed_in: false,
      userId: 0,
    };
    this.loginButtonClick = this.loginButtonClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }

  loginButtonClick() {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Accepted': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'email='+this.state.email + '&' + 'password='+this.state.password,
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        if (jsonData.login) {
          this.setState({
            signed_in: jsonData.login,
            userId: jsonData.user_id,
          })
        }
      })
      .catch(() => {
        console.log('error');
      })
  }

  signUpButtonClick() {
  }
  
  render() {
    return (
      <div className="App">
      {this.state.signed_in === false ?
        <NavbarInstance
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          onLoginButtonClick={this.loginButtonClick}
        />
        :
        <LoggedInNavbarInstance/>}
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
