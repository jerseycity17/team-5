import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarInstance from "./NavbarInstance.js";
import LoggedInNavbarInstance from "./LoggedInNavbarInstance.js";
import CarouselInstance from "./CarouselInstance.js";
import Signup from './Signup'

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signed_in: false,
      userId: 0,
    };
    this.loginButtonClick = this.loginButtonClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.handleSignUpEmailChange = this.handleSignUpEmailChange.bind(this);
    this.handleSignUpPasswordChange = this.handleSignUpPasswordChange.bind(this);
    this.handleSignUpFirstNameChange = this.handleSignUpFirstNameChange.bind(this);
    this.handleSignUpLastNameChange = this.handleSignUpLastNameChange.bind(this);
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

  handleSignUpEmailChange(event) {
    this.setState({
      signUpEmail: event.target.value,
    })
  }

  handleSignUpPasswordChange(event) {
    this.setState({
      signUpPassword: event.target.value,
    })
  }

  handleSignUpFirstNameChange(event) {
    this.setState({
      signUpFirstName: event.target.value,
    })
  }

  handleSignUpLastNameChange(event) {
    this.setState({
      signUpLastName: event.target.value,
    })
  }

  loginButtonClick() {
    fetch('http://127.0.0.1:5000/login', {
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
          fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
              'Accepted': 'appication/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "user_id="+jsonData.user_id,
          })
            .then((response) => {
              return response.json()
            })
            .then((jsonData) => {
              this.setState({
                firstName: jsonData.first_name,
                lastName: jsonData.last_name,
              })
            })
            .catch(() => {
              console.log('error');
            })
        }
      })
      .catch(() => {
        console.log('error')
      })


  }

  submitClick() {
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Accepted': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email='+this.state.signUpEmail+'&'+
              'password='+this.state.signUpPassword+'&'+
              'first_name='+this.state.signUpFirstName+'&'+
              'last_name='+this.state.signUpLastName,
      })
        .then((response) => {

          console.log('got response')
          return response.json()
        })
        .then((jsonData) => {
          this.setState({
            signed_in: true,
            userId: jsonData.user_id,
            firstName: this.state.signUpFirstName,
            lastName: this.state.signUpLastName,
          })
        })
        .catch(() => {
          console.log('error')
        })
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
        <LoggedInNavbarInstance firstName={this.state.firstName} lastName={this.state.lastName}/>
      }
          <header className="App-header">
            <img src="https://pbs.twimg.com/profile_images/907642405683290114/E2FU6vic.jpg"className="App-logo"/>
            <h1 className="App-title"></h1>
          </header>
          <div className="App-intro">
            {!this.state.signed_in ? 
              <div>
                <Signup 
                  onSubmitClick={this.submitClick} 
                  onEmailChange={this.handleSignUpEmailChange}
                  onPasswordChange={this.handleSignUpPasswordChange}
                  onFirstNameChange={this.handleSignUpFirstNameChange}
                  onLastNameChange={this.handleSignUpLastNameChange}
                />
                <CarouselInstance/>
              </div>
              : 
              <div>

              </div> }
          </div>

        <Switch>
          //insert routes

        </Switch>
      </div>
    );
  }
}

export default App;
