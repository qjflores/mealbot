import React, { Component } from 'react';

import './../../css/Wallet.css'

export class Wallet extends Component {
	constructor(props) {
		super(props);
		this.state = {isWalletAttached: false};
		this.attachWallet = this.attachWallet.bind(this);
	}

	componentWillMount() {
		this.setState({isWalletAttached:this.props.isWalletAttached})
	}

	attachWallet() {
		console.log("attachWallet");
	}

	render() {
		return (
			<div className="Wallet">
			<div className="wallet-label">
			{this.props.label}
			</div>
			<div className="attach-wallet" onClick={this.attachWallet.bind(this)}>
				<i className="fa fa-id-card wallet-icon"></i>
				Attach Wallet
			</div>
			</div>
			)
	}
}

export default Wallet;