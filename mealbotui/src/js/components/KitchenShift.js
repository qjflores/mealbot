import React, { Component } from 'react';

import {DayKitchenShift} from './DayKitchenShift'

export class KitchenShift extends Component {
	render() {
		return (
			<div className="KitchenShift">
			<DayKitchenShift name="Saturday" />
			<DayKitchenShift name="Sunday" />
			<DayKitchenShift name="Monday" />
			<DayKitchenShift name="Tuesday" />
			<DayKitchenShift name="Wednesday" />
			<DayKitchenShift name="Thursday" />
			<DayKitchenShift name="Friday" />
			</div>
			)
	}
}