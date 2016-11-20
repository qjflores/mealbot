import React, { Component } from 'react';
import './../../css/AppNavTab.css'

import {Row, Nav, NavItem, Grid, Col} from 'react-bootstrap';

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
      isKitchenShiftVisible: true
    };
    this.handleAccountSelect = this.handleAccountSelect.bind(this);
    this.handleScheduleSelect = this.handleScheduleSelect.bind(this);  
    this.clickChart = this.clickChart.bind(this);
    this.clickGear = this.clickGear.bind(this);
    this.clickKitchenShift = this.clickKitchenShift.bind(this);
  } 

  componentWillMount() {
    console.log("AppNavTab.componentWillMount")
    this.setState({
      isAccountVisible:this.props.isAccountVisible,
      isScheduleVisible: this.props.isScheduleVisible,
      isHomeVisible:this.props.isHomeVisible
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
    console.log(this);
    this.setState({isHomeVisible:false, isScheduleVisible:false, isAccountVisible: false, isKitchenShiftVisible: true});
  }

  render() {
    console.log("render AppNavTab");
    return (
        <Grid>
        <Row className="App-nav-header">
          <Col xs={6} md={4}><i className="fa fa-bar-chart fa-5x" onClick={this.clickChart.bind(this)}></i></Col>
          <Col xs={6} md={4} className="App-name" onClick={this.clickLogo.bind(this)}>MealBot </Col>
          <Col xs={6} md={4}>
            <SettingsMenu clickHandler={this.clickGear} clickKitchenShift={this.clickKitchenShift.bind(this)}/>
          </Col>
        </Row>
        <Row>
        <div className="App-nav-tabs col-md-12">
          <Nav className="col-md-12" justified bsStyle="tabs" activeKey="1" >
          <NavItem className="nav-item-mb" eventKey="true" value="true" onSelect={this.handleAccountSelect.bind(this)}>Account</NavItem>
          <NavItem className="nav-item-mb" eventKey="false" value="false" onSelect={this.handleScheduleSelect.bind(this)}>Schedule</NavItem>
          </Nav>
          {this.state.isAccountVisible ? <Account /> : null}
          {this.state.isScheduleVisible ? <Schedule /> : null}
          {this.state.isHomeVisible ? <Home /> : null}
          {this.state.isKitchenShiftVisible ? <KitchenShift /> : null}
        </div>
        </Row>
        </Grid>
      )
  }
}

export default AppNavTab;