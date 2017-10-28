import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div>
				<label>Email: </label>
				<input type="text" onChange={this.props.handleEmailChange} />
				<label>Password: </label>
				<input type="Password" onChange={this.props.handlePasswordChange} />
				<button onClick={this.props.onLoginButtonClick}>Login</button>
			</div>
		)
	}
}

export default Login;		