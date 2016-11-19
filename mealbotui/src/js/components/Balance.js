import React, { Component } from 'react';

import './../../css/Balance.css'

export class Balance extends Component {
	constructor(props) {
		super(props);
		this.state = {isWalletAttached: false};
		this.addBalance = this.addBalance.bind(this);
	}

	componentWillMount() {
		this.setState({isWalletAttached:this.props.isWalletAttached})
	}

	addBalance() {
		console.log("addBalance");
	}

	render() {
		return (
			<div className="Balance">
				<div className="balance-label">
					{this.props.label}
					<div className="balance-amount">{this.props.balance}</div>
				</div>

			<div className="add-balance" onClick={this.addBalance.bind(this)}>
				<i className="fa fa-university wallet-icon"></i>
				Add Balance
			</div>
			</div>
			)
	}
}

export default Balance;