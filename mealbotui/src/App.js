import React, { Component } from 'react';
import './App.css';

import {Grid, Col, Row} from 'react-bootstrap';

import Web3 from 'web3';
import _ from 'lodash';

import AppNavTab from './js/components/AppNavTab';
import SettingsMenu from './js/components/SettingsMenu'

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var mealBonContractABI = [{"constant":true,"inputs":[],"name":"getUsers","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"balance","type":"uint256"}],"name":"addUser","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"}]
var mealBotAddress = '0xdf924841051a8be6f067637716f3c64b8163e630'
var mealBotContract = ETHEREUM_CLIENT.eth.contract(mealBonContractABI).at(mealBotAddress);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false,
      firstNames: [],
      lastNames: [],
      balances: [],
      day:"",
      day_meal_plan: []
    }
    this.clickChart = this.clickChart.bind(this);
    this.clickGear = this.clickGear.bind(this);
  }

  componentWillMount() {
    var data = mealBotContract.getUsers();
    this.setState({
      firstNames: String(data[0]).split(','),
      lastNames: String(data[1]).split(','),
      balances: String(data[2]).split(','),
    })
    console.log(data);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  clickChart() {
    console.log("clickChart");
  }

  clickGear() {
    console.log("clickGear");
  }

  clickLogo() {
    console.log("clickLogo"); 
  }

  render() {
    var TableRows = [];
    _.each(this.state.firstNames, (values,index) => {
      TableRows.push(
        <tr>
          <td>{ETHEREUM_CLIENT.toAscii(this.state.firstNames[index])}</td>
          <td>{ETHEREUM_CLIENT.toAscii(this.state.lastNames[index])}</td>
          <td>{this.state.balances[index]}</td>
        </tr>
        )
    })
    return (

      <div className="App">
        <Grid>
        <Row className="App-nav-header">
          <Col xs={6} md={4}><i className="fa fa-bar-chart fa-5x" onClick={this.clickChart.bind(this)}></i></Col>
          <Col xs={6} md={4} className="App-name" onClick={this.clickLogo.bind(this)}>MealBot </Col>
          <Col xs={6} md={4}>
            <SettingsMenu clickHandler={this.clickGear}/>
          </Col>
        </Row>
        <AppNavTab />
        </Grid>
      </div>
    );
  }
}

export default App;
