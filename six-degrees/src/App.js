import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import NavbarInstance from "./NavbarInstance.js";
import CarouselInstance from "./CarouselInstance.js";

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
    fetch('https://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
      .then((jsonData) => {
        if (jsonData[0] === false) {

        }
      })
    })
  }

  signUpButtonClick() {
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
          <Route 
            path='/login' 
            render={(
              props) => (
                <Login 
                  handleEmailChange={this.handleEmailChange}
                  handlePasswordChange={this.handlePasswordChange}
                  onLoginButtonClick={this.loginButtonClick}
                />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
