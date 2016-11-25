import React, { Component } from 'react';

import {Wallet} from './Wallet';
import {Balance} from './Balance';

export class AccountEmpty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wallets: []
		};
		this.updateWallet = this.updateWallet.bind(this);
	}

	componentWillMount() {
		this.setState({wallets:[{key: 1, address:"0x1",name:"wallet-1"}, {key: 2, address:"0x2",name:"wallet-2"}]})
	}

  updateWallet(walletName, walletAddress) {
    var updatedWallet =this.state.wallets;
    var _updatedKey = updatedWallet[updatedWallet.length-1].key + 1;
    updatedWallet.push({address:walletAddress,name:walletName, 'key': _updatedKey});
    this.setState({wallets:updatedWallet});
    console.log("updateWallet");
    console.log(this.state.wallets);
  }

	render() {
		return (
			<div className="AccountEmpty">
			<Wallet label="Wallets" isWalletAttached={false} wallets={this.state.wallets} updateWallet={this.updateWallet}/>
			<Balance label="Balance" balance={0} isWalletAttached={false} wallets={this.state.wallets}/>
			</div>
			)
	}
}

export default AccountEmpty;