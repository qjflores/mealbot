import React, { Component } from 'react';

import {Login} from './Login';
import {AccountEmpty} from './AccountEmpty';

import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

export class Account extends Component {
  //mixins: [ReactFireMixin]

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
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
        this.setState({isAuthenticated:true})
      } else {
        console.log("not logged in");
      }
    })
  }

  login() {
      event.preventDefault();
      console.log("Login.login");
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const auth = firebase.auth();

      const email = txtEmail.value;
      const pass = txtPassword.value;

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));

      const logoutButton = document.getElementById("logoutButton");
    }

  signup() {
    console.log("signup");
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    const email = txtEmail.value;
    const pass = txtPassword.value;


    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    var userdata = {"email":email}
    var ref = firebase.database().ref("users").set(userdata);
  }


  render() {
    return (
      <div className="Account-component">
        {!this.state.isAuthenticated ? <Login isAuthenticated={this.state.isAuthenticated} 
        login={this.login} 
        signup={this.signup}
        /> : <AccountEmpty />}
        
      </div>
      )
  }
}

reactMixin(Account.prototype, ReactFireMixin);

export default Account;