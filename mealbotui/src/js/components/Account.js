import React, { Component } from 'react';

import {Login} from './Login';
import {AccountEmpty} from './AccountEmpty';

import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: undefined,
    }
  }

  componentWillMount() {
    console.log("Account.componentWillMount");
    this.setState({isAuthenticated: false});
  }

  componentDidMount() {
    console.log("Account.componentDidMount");
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log("firebaseUser logged in");
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        this.setState({isAuthenticated:true,
          user:firebaseUser})
      } else {
        console.log("not logged in");
      }
    })
  }




  render() {
    return (
      <div className="Account-component">
        {!this.state.isAuthenticated ? <Login isAuthenticated={this.state.isAuthenticated} 
        login={this.props.login} 
        signup={this.props.signup}
        /> : <AccountEmpty user={this.state.user}/>}
        
      </div>
      )
  }
}

reactMixin(Account.prototype, ReactFireMixin);

export default Account;