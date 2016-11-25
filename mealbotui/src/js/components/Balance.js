import React, { Component } from 'react';

import {AddBalanceModal} from './AddBalanceModal';

import './../../css/Balance.css'

export class Balance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isWalletAttached: false,
			showBalanceModal: false,
			balance: 0,
			wallets:[]
		};
		this.addBalance = this.addBalance.bind(this);
    this.openBalanceModal = this.openBalanceModal.bind(this);
    this.closeBalanceModal = this.closeBalanceModal.bind(this);
	}

	componentWillMount() {
		this.setState({
			isWalletAttached:this.props.isWalletAttached,
			balance: this.props.balance,
			wallets: this.props.wallets
		})
		console.log("Balance.componentWillMount");
		console.log(this.props.wallets);

	}

	componentDidMount(){
		console.log("Balance.componentDidMount");
		this.setState({
			wallets: this.props.wallets
		})
		console.log(this.state.wallets);
	}

	openBalanceModal() {
		this.setState({showBalanceModal:true});
		console.log("openBalanceModal");
	}

	closeBalanceModal() {
		this.setState({ showBalanceModal: false });
		console.log("closeBalanceModal");	
	}

	addBalance(wallet, balance) {
		console.log("addBalance");
		console.log(wallet);
		console.log(balance);
		this.setState({balance:balance})
		this.closeBalanceModal();
	}

	render() {
		return (
			<div className="Balance">
				<div className="balance-label">
					{this.props.label}
					<div className="balance-amount">{this.state.balance}</div>
				</div>

			<div className="open-balance-modal" onClick={this.openBalanceModal.bind(this)}>
				<i className="fa fa-university wallet-icon"></i>
				Add Balance
			</div>
      <div>
      {this.state.showBalanceModal ? <AddBalanceModal 
        showBalanceModal={this.state.showBalanceModal} 
        closeBalanceModal={this.closeBalanceModal}
        addBalance={this.addBalance}
        wallets={this.state.wallets}
        /> : null}

      </div>
			</div>
			)
	}
}

export default Balance;