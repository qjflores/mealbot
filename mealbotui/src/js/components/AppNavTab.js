import React, { Component } from 'react';
import './../../css/AppNavTab.css'

import {Row, Nav, NavItem, Grid, Col} from 'react-bootstrap';
import * as firebase from "firebase";

import {Account} from './Account';
import {Schedule} from './Schedule'; 
import {Home} from './Home';
import {SettingsMenu} from './SettingsMenu';
import {KitchenShift} from './KitchenShift';

export class AppNavTab extends Component {
  contructor(props) {
    this.state = {
      isAccountVisible:false,
      isScheduleVisible:false,
      isHomeVisible:true,
      isKitchenShiftVisible: false,
      user:undefined
    };
    this.handleAccountSelect = this.handleAccountSelect.bind(this);
    this.handleScheduleSelect = this.handleScheduleSelect.bind(this);  
    this.clickChart = this.clickChart.bind(this);
    this.clickGear = this.clickGear.bind(this);
    this.clickKitchenShift = this.clickKitchenShift.bind(this);
    this.clickLogout = this.clickLogout.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  } 

  componentWillMount() {
    console.log("AppNavTab.componentWillMount")
    this.setState({
      isAccountVisible:this.props.isAccountVisible,
      isScheduleVisible: this.props.isScheduleVisible,
      isHomeVisible:this.props.isHomeVisible,
      isKitchenShiftVisible:this.props.isKitchenShiftVisible,
    })
  }

  componentDidMount() {
    console.log("AppNavTab.componentDidMount");
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        this.setState({isAuthenticated:true,
          user:firebaseUser})
      } else {
        console.log("not logged in");
      }
    })
  }

  handleAccountSelect() {
    console.log("handleAccountSelect");
    console.log(this);
    this.setState({
      isAccountVisible:true,
      isScheduleVisible: false,
      isHomeVisible:false,
      isKitchenShiftVisible: false
    })
    console.log(this.state);
    console.log(this.state.isAccountVisible);
  }
  

  handleScheduleSelect() {
    console.log("handleScheduleSelect");
    console.log(this);
    this.setState({
      isAccountVisible:false,
      isScheduleVisible:true,
      isHomeVisible:false,
      isKitchenShiftVisible: false

    })
    console.log(this.state);
    console.log(this.state.isScheduleVisible);
  }

  clickChart() {
    console.log("clickChart");
  }

  clickGear() {
    console.log("clickGear");
  }

  clickLogo() {
    console.log("clickLogo"); 
    this.setState({isHomeVisible:true, isScheduleVisible:false, isAccountVisible: false, isKitchenShiftVisible: false});
    console.log(this.state);
  }

  clickKitchenShift() {
    console.log("clickKitchenShift");
    this.setState({isHomeVisible:false, isScheduleVisible:false, isAccountVisible: false, isKitchenShiftVisible: true});
  }

  clickLogout() {
    console.log("cliclickKitchenShiftckLogout1");
    firebase.auth().signOut();
    this.setState({isHomeVisible:true, isScheduleVisible:false, isAccountVisible: false, isKitchenShiftVisible: false});
  }

  login() {
      console.log("AppNavTab.login");
      event.preventDefault();
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const auth = firebase.auth();
      const email = txtEmail.value;
      const pass = txtPassword.value;

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    }

  signup() {
    console.log("signup");
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    const email = txtEmail.value;
    const pass = txtPassword.value;


    const auth = firebase.auth();
    var userid = "";
    auth.createUserWithEmailAndPassword(email, pass).then(function(firebaseUser){
      userid = firebaseUser.uid;
      var userdata = {[userid]:{"email":email}};
      firebase.database().ref("users").set(userdata);
      //Here if you want you can sign in the user
      }).catch(function(error) {
          //Handle error
          console.log(error.message)
      });
  }

  render() {
    console.log("AppNavTab.render");
    return (
        <Grid>
        <Row className="App-nav-header">
          <Col xs={6} md={4}><i className="fa fa-bar-chart fa-5x" onClick={this.clickChart.bind(this)}></i></Col>
          <Col xs={6} md={4} className="App-name" onClick={this.clickLogo.bind(this)}>MealBot </Col>
          <Col xs={6} md={4}>
            <SettingsMenu clickLogout={this.clickLogout.bind(this)} clickHandler={this.clickGear} clickKitchenShift={this.clickKitchenShift.bind(this)}/>
          </Col>
        </Row>
        <Row>
        <div className="App-nav-tabs col-md-12">
          <Nav className="col-md-12" justified bsStyle="tabs" activeKey="1" >
          <NavItem className="nav-item-mb" eventKey="true" value="true" onSelect={this.handleAccountSelect.bind(this)}>Account</NavItem>
          <NavItem className="nav-item-mb" eventKey="false" value="false" onSelect={this.handleScheduleSelect.bind(this)}>Schedule</NavItem>
          </Nav>
          {this.state.isAccountVisible ? <Account login={this.login} signup={this.signup} /> : null}
          {this.state.isScheduleVisible ? <Schedule user={this.state.user}/> : null}
          {this.state.isHomeVisible ? <Home /> : null}
          {this.state.isKitchenShiftVisible ? <KitchenShift user={this.state.user}/> : null}
        </div>
        </Row>
        </Grid>
      )
  }
}

export default AppNavTab;