import React, { Component } from 'react';

import './../../css/ShiftLabel.css';

export class ShiftLabel extends Component {
	render() {
		return (
			<div className="ShiftLabel">
				{this.props.name}
			</div>
			)
	}
}

export default ShiftLabel;