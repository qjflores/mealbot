import React, { Component } from 'react';

import {Login} from './Login';
import {AccountEmpty} from './AccountEmpty';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    this.setState({isAuthenticated: false});
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

  render() {
    return (
      <div className="Account-component">
        {!this.state.isAuthenticated ? <Login isAuthenticated={this.state.isAuthenticated} login={this.login}/> : <AccountEmpty />}
        
      </div>
      )
  }
}

export default Account;