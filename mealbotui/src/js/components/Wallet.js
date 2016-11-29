import React, { Component } from 'react';

import {AddWalletModal} from './AddWalletModal';

import './../../css/Wallet.css'

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWalletAttached: false,
      showWalletModal: false,
      wallets:[],
      user: undefined
    };
    this.attachWallet = this.attachWallet.bind(this);
    this.openWalletModal = this.openWalletModal.bind(this);
    this.closeWalletModal = this.closeWalletModal.bind(this);
    this.addWallet = this.addWallet.bind(this);
  }

  componentWillMount() {
    this.setState({
      isWalletAttached:this.props.isWalletAttached,
      wallets: this.props.wallets,
      user: this.props.user
    })
  }

  closeWalletModal() {
    console.log("closeWalletModal");
    this.setState({ showWalletModal: false });
  }

  openWalletModal() {
    this.setState({ showWalletModal: true });
    console.log("open");
  }

  attachWallet() {
    this.openWalletModal();
    console.log("attachWallet");
  }

  addWallet(walletName, walletAddress) {
    this.props.updateWallet(walletName, walletAddress)
    this.setState({ showWalletModal: false});
  }

  render() {
    var wallets = this.state.wallets;
    var walletList = wallets.map(function(wallet) {
      return <div className="wallet-list" key={wallet.key}>{wallet.address} {wallet.name}</div>
      })
    return (
      <div className="Wallet">
      <div className="wallet-label">
      {this.props.label}
      </div>
      <div>{ walletList }</div>
      <div className="attach-wallet" onClick={this.attachWallet.bind(this)}>
        <i className="fa fa-id-card wallet-icon"></i>
        Attach Wallet
      </div>
      {this.state.showWalletModal ? <AddWalletModal 
        showWalletModal={this.state.showWalletModal} 
        closeWalletModal={this.closeWalletModal}
        addWallet={this.addWallet}
        /> : null}

      </div>
      )
  }
}

export default Wallet;