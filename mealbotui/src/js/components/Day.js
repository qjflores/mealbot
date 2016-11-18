import React, { Component } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

import {MealTicket} from './MealTicket';
import {Schedule} from './Schedule';

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
	}

	componentWillMount() {
		var day = this.props.day;
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

  toggleBreakfast() {
    this.setState({
      breakfast:!this.state.breakfast
    })
  }

  toggleLunch() {
    this.setState({
      lunch:!this.state.lunch
    })
  }

  toggleDinner() {
    this.setState({ 
      dinner:!this.state.dinner
    })
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
          <MealTicket className="MealTicket" name="Breakfast" isReserved={this.state.breakfast} clickHandler={this.toggleBreakfast}/>
          <MealTicket className="MealTicket" name="Lunch" isReserved={this.state.lunch} clickHandler={this.toggleLunch}/> 
          <MealTicket className="MealTicket" name="Dinner" isReserved={this.state.dinner} clickHandler={this.toggleDinner}/>
        </div>

        </div>
			</div>
			)
	}
}

export default Day;
