import React, { Component } from 'react';

import * as firebase from "firebase";
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {MealTicket} from './MealTicket';


import './../../css/Day.css'

export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {user_meal_plan: {},
      breakfast:false,
      lunch: false,
      dinner: false
    };

    this.updateMealStatus = this.updateMealStatus.bind(this);
    this.selectAllMeals = this.selectAllMeals.bind(this);
    this.toggleBreakfast = this.toggleBreakfast.bind(this);
    this.toggleLunch = this.toggleLunch.bind(this);
    this.toggleDinner = this.toggleDinner.bind(this);
    this.updateFirebase = this.updateFirebase.bind(this);
  }

  componentWillMount() {
    var _user_meal_plan = {day: [this.breakfast,this.lunch,this.dinner]};
    this.setState({user_meal_plan: _user_meal_plan});
  }

  updateMealStatus(mealstatus, key) {
    mealstatus = (mealstatus? false : true );
    }

  selectAllMeals() {
    var {breakfast, lunch, dinner} = this.state;
    var _bool = breakfast && lunch && dinner;
    if (_bool) {
    this.setState({
      breakfast:false,
      lunch: false,
      dinner: false})
    }
    else {
     this.setState({
      breakfast:true,
      lunch: true,
      dinner: true}) 
    }
  }

  updateFirebase(mealticket_value, mealtime, day) {
      console.log("MealTicket.updateFirebase");
      var _url = "mealplan/"+ this.props.user.uid + "/"+ day + "/" + mealtime;
      var ref = firebase.database().ref(_url);
      ref.set(mealticket_value);
    }

  toggleBreakfast() {
    this.setState({
      breakfast:!this.state.breakfast
    });
    this.updateFirebase(this.state.breakfast, "breakfast", this.props.day);
    }

  toggleLunch() {
    this.setState({
      lunch:!this.state.lunch
    });
    this.updateFirebase(this.state.lunch, "lunch", this.props.day);
  }

  toggleDinner() {
    this.setState({ 
      dinner:!this.state.dinner
    });
    this.updateFirebase(this.state.dinner, "dinner", this.props.day);
  }

  render() {
    var _bstyle={backgroundColor:'white'};
    var _lstyle={backgroundColor:'white'};
    var _dstyle={backgroundColor:'white'};
    if (this.state.breakfast) {
      _bstyle = {backgroundColor:'red'};
    }
    if (this.state.lunch) {
      _lstyle = {backgroundColor:'red'};
    }
    if (this.state.dinner) {
      _dstyle = {backgroundColor:'red'};
    }
    return (
      <div className="Day-component">
        <div className="mb-schedule-button-group col-md-6 col-md-offset-3">
        <div className="day-name" onClick={this.selectAllMeals.bind(this)}>{this.props.day}</div>

        <div className="scheduleButtonGroup">
          <MealTicket user={this.props.user} className="MealTicket" name="breakfast" isReserved={this.state.breakfast} mealtime={this.props.day} clickHandler={this.toggleBreakfast}/>
          <MealTicket user={this.props.user} className="MealTicket" name="lunch" isReserved={this.state.lunch} mealtime={this.props.day} clickHandler={this.toggleLunch}/> 
          <MealTicket user={this.props.user} className="MealTicket" name="dinner" isReserved={this.state.dinner} mealtime={this.props.day} clickHandler={this.toggleDinner}/>
        </div>

        </div>
      </div>
      )
  }
}

export default Day;
