import React, { Component } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

import {MealTicket} from './MealTicket';

import './../../css/Day.css'

export class Day extends Component {
	render() {
		return (
			<div className="Day-component">
        <div className="mb-schedule-button-group">
        <div className="day-name"></div>
         {this.props.day} 
        <ButtonGroup>
          <Button>Breatfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </ButtonGroup>
        </div>
			</div>
			)
	}
}

export default Day;