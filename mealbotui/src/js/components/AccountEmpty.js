import React, { Component } from 'react';

import {Wallet} from './Wallet';
import {Balance} from './Balance';

export class AccountEmpty extends Component {
	render() {
		return (
			<div className="AccountEmpty">
			<Wallet label="Wallets"/>
			<Balance />
			</div>
			)
	}
}

export default AccountEmpty;