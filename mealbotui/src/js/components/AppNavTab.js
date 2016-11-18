import React, { Component } from 'react';
import './../../css/AppNavTab.css'

import {Row} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

import {Account} from './Account';
import {Schedule} from './Schedule'; 
import {Home} from './Home';

export class AppNavTab extends Component {
  contructor(props) {
    this.state = {
      isAccountVisible:false,
      isScheduleVisible:false,
      isHomeVisible:true};
    this.handleAccountSelect = this.handleAccountSelect.bind(this);
    this.handleScheduleSelect = this.handleScheduleSelect.bind(this);  
  } 

  componentWillMount() {
    this.setState({
      isAccountVisible:false,
      isScheduleVisible: false,
      isHomeVisible:true
    })
  }

  handleAccountSelect() {
    console.log("handleAccountSelect");
    console.log(this);
    this.setState({
      isAccountVisible:true,
      isScheduleVisible: false,
      isHomeVisible:false
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
      isHomeVisible:false

    })
    console.log(this.state);
    console.log(this.state.isScheduleVisible);
  }

  render() {
    return (

        <Row>
        <div className="App-nav-tabs col-md-12">
          <Nav className="col-md-12" justified bsStyle="tabs" activeKey="1" >
          <NavItem className="nav-item-mb" eventKey="true" value="true" onSelect={this.handleAccountSelect.bind(this)}>Account</NavItem>
          <NavItem className="nav-item-mb" eventKey="false" value="false" onSelect={this.handleScheduleSelect.bind(this)}>Schedule</NavItem>
          </Nav>
          {this.state.isAccountVisible ? <Account /> : null}
          {this.state.isScheduleVisible ? <Schedule /> : null}
          {this.state.isHomeVisible ? <Home /> : null}
        </div>
        </Row>
      )
  }
}

export default AppNavTab;