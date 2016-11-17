import React, { Component } from 'react';


import Web3 from 'web3';
import _ from 'lodash';


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var mealBonContractABI = [{"constant":true,"inputs":[],"name":"getUsers","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"balance","type":"uint256"}],"name":"addUser","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"}]
var mealBotAddress = '0x683da6213684fe15a85a969f801d2c5a0b9cd5d1'

var mealBotContract = ETHEREUM_CLIENT.eth.contract(mealBonContractABI).at(mealBotAddress);
var defaultAccont = ETHEREUM_CLIENT.eth.accounts[0];


export class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {balance: 0,firstName: '', lastName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.firstName + " " + this.state.lastName + " " + this.state.balance);
    //alert(mealBotContract.addUser(this.state.firstName, this.state.lastName, this.state.balance));
    mealBotContract.addUser(this.state.firstName, this.state.lastName, this.state.balance, {from: defaultAccont}); //from an existing wallet
    console.log("added a user");
    console.log(mealBotContract.getUsers());
    event.preventDefault();
  }

  render(){
  return(
    <div className="App-user-signup">
      <h1>Signup</h1>
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')} />
        <input type="text" value={this.state.lastName} onChange={this.handleChange.bind(this, 'lastName')} />
        <input type="text" value={this.state.balance} onChange={this.handleChange.bind(this, 'balance')} />
        <input type="submit" value="Submit" />
      </form>
     </div>
    )   
  }
}

export default NewUser;