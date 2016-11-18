import React, { Component } from 'react';

import {Login} from './Login';
import {AccountEmpty} from './AccountEmpty';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount() {
    this.setState({isAuthenticated: true});
  }
  
  render() {
    return (
      <div className="Account-component">
        {!this.state.isAuthenticated ? <Login /> : null}
        <AccountEmpty />
      </div>
      )
  }
}

export default Account;