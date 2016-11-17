import React, { Component } from 'react';

import './../../css/MealTicket.css'

export class MealTicket extends Component {
	render() {
		return (
			<div className="MealTicket">
			{this.props.meal}
			</div>
			)
	}
}

export default MealTicket;