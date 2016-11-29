import React, { Component } from 'react';

import './../../css/MealTicket.css';


export class MealTicket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isReserved:false,
		};
	}

	componentWillMount() {
		this.setState({
			isReserved: this.props.isReserved,
		});
	}

	render() {
		var mb_style=this.state.style;
		if (this.props.isReserved) {
			mb_style={backgroundColor:'red'};

		}
		else {
			mb_style={backgroundColor:'white'};
		}
		return (
			<div className="MealTicket" onClick={this.props.clickHandler} style={mb_style}>
			{this.props.name}
			</div>
			)
	}
}

export default MealTicket;