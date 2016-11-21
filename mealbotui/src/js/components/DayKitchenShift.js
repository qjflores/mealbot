import React, { Component } from 'react';

import {ShiftTicket} from './ShiftTicket';
import {ShiftLabel} from './ShiftLabel';

import './../../css/DayKitchenShift.css'

export class DayKitchenShift extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shift: false
		}
		this.toggleShift = this.toggleShift.bind(this);
	}

  toggleShift() {
    this.setState({
      shift:!this.state.shift
    })
  }

	render() {
		return (
			<div className="DayKitchenShift">
				<ShiftLabel name={this.props.name} />
				<ShiftTicket isReserved={this.state.shift} clickHandler={this.toggleShift}/>
			</div>
			)
	}
}

export default DayKitchenShift;