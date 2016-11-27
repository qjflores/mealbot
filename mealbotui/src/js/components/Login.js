import React, { Component } from 'react';

import './../../css/Login.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotLoggedIn: false,
      isAuthenticated: false
    }
    this.logout = this.logout.bind(this);
  }

  componetsWillMount() {
    this.state = {
      isNotLoggedIn: false,
      isAuthenticated: this.props.isAuthenticated
    }
  }

  logout() {
    // AuthActions.logUserOut();
    this.setState({isNotLoggedIn: true});
  }

  render() {
    return (
      <div className="Login">
        <div className="email-label">
        Email<input id="txtEmail" type="email" className="email-input" placeholder="Email"></input>
        </div>
        <div className="password-label">
        Password
        <input id="txtPassword" type="Password" className="password-input" placeholder="Password"></input>
        </div>
        <div className="login-button" onClick={this.props.login}>
          Login
        </div>
        <div className="signup-button" onClick={this.props.signup}>
          Signup
        </div>

      </div>
      )
  }
}

export default Login;