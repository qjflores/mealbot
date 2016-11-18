import React, { Component } from 'react';

import './../../css/Wallet.css'

export class Wallet extends Component {
	render() {
		return (
			<div className="Wallet">
			<div className="wallet-label">
			{this.props.label}
			</div>
			</div>
			)
	}
}

export default Wallet;