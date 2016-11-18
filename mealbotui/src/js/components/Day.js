import React, { Component } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

import {MealTicket} from './MealTicket';
import {Schedule} from './Schedule';

import './../../css/Day.css'

export class Day extends Component {
	constructor(props) {
		super(props);
		this.state = {user_meal_plan: {},
		};
		this.breakfast = true;
		this.lunch = true;
		this.dinner = true;

		this.updateMealStatus = this.updateMealStatus.bind(this);
	}

	componentWillMount() {
		var day = this.props.day;
		var _user_meal_plan = {day: [this.breakfast,this.lunch,this.dinner]};
		this.setState({user_meal_plan: _user_meal_plan});
	}

	updateMealStatus(mealstatus, key) {
		console.log("updateMealStatus");
		console.log(this);
		console.log(mealstatus);
		mealstatus = (mealstatus? false : true );

		console.log(mealstatus);
		}


	render() {
		return (
			<div className="Day-component">
        <div className="mb-schedule-button-group col-md-6 col-md-offset-3">
        <div className="day-name">{this.props.day}</div>

        <ButtonGroup className="scheduleButtonGroup">
          <Button className="scheduleButton" onClick={this.updateMealStatus(this.breakfast,"breakfast")} selected={this.breakfast}>Breakfast</Button>
          <Button className="scheduleButton" onClick={this.updateMealStatus(this.lunch,"lunch")} selected={this.lunch}>Lunch</Button>
          <Button className="scheduleButton" onClick={this.updateMealStatus(this.dinner, "dinner")} selected={this.dinner}>Dinner</Button>
        </ButtonGroup>
        </div>
			</div>
			)
	}
}

export default Day;
