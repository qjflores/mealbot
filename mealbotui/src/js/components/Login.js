import React, { Component } from 'react';

import {Form, FormGroup, FormControl, Grid, Col, Button, ControlLabel, Checkbox, 
  Row} from 'react-bootstrap';

import './../../css/Login.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotLoggedIn: false,
      isAuthenticated: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componetsWillMount() {
    this.state = {
      isNotLoggedIn: false,
      isAuthenticated: this.props.isAuthenticated
    }
  }

  login() {
      // We can call the show method from Auth0Lock,
      // which is passed down as a prop, to allow
      // the user to log in
      event.preventDefault();
      console.log("Login.login");
      this.setState({isNotLoggedIn: true,
        isAuthenticated: true});
    }

  logout() {
    // AuthActions.logUserOut();
    this.setState({isNotLoggedIn: false});
  }

  render() {
    return (
      <div className="Login">
        <div className="email-label">
        Email<input className="email-input" placeholder="Email"></input>
        </div>
        <div className="password-label">
        Password
        <input className="password-input" placeholder="Password"></input>
        </div>
        <div className="login-button" onClick={this.props.login}>
          Login
        </div>
      </div>
      )
  }
}

export default Login;