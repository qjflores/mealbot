import React, { Component } from 'react';

import {Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox} from 'react-bootstrap';

import './../../css/Login.css'

export class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      isNotLoggedIn: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componetsWillMount() {
  	this.state = {
      isNotLoggedIn: false
    }
  }

	login() {
	    // We can call the show method from Auth0Lock,
	    // which is passed down as a prop, to allow
	    // the user to log in
	    event.preventDefault();
	    console.log("Login.login");
      this.setState({isNotLoggedIn: true});
      console.log(this);
      return false;
	  }

	logout() {
    // AuthActions.logUserOut();
    this.setState({isNotLoggedIn: false});
  }

	render() {
		return (
			<div className="Login">
				<Form horizontal>
			    <FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2} smOffset={2}>
			        Email
			      </Col>
			      <Col sm={4}>
			        <FormControl type="email" placeholder="Email" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={2} smOffset={2}>
			        Password
			      </Col>
			      <Col sm={4}>
			        <FormControl type="password" placeholder="Password" />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={3} sm={4}>
			        <Checkbox>Remember me</Checkbox>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={1} sm={10}>
			        <Button onClick={this.login.bind(this)}>
			          Sign in
			        </Button>
			      </Col>
			    </FormGroup>
			  </Form>
			</div>
			)
	}
}

export default Login;