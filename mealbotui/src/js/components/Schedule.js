import React, { Component } from 'react';

import {Day} from './Day'; 

export class Schedule extends Component {
	render() {
		return (
			<div className="Schedule-component">
				<Day day="Saturday"/>
				<Day day="Sunday"/>
				<Day day="Monday"/>
				<Day day="Tuesday"/>
				<Day day="Wednesday"/>
				<Day day="Thursday"/>
				<Day day="Friday"/>
			</div>
			)
	}
}

export default Schedule;