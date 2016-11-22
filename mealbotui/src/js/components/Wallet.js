import React, { Component } from 'react';

import {AddWalletModal} from './AddWalletModal';

import './../../css/Wallet.css'

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWalletAttached: false,
      showModal: false,
      wallets:[]
    };
    this.attachWallet = this.attachWallet.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addWallet = this.addWallet.bind(this);
  }

  componentWillMount() {
    this.setState({
      isWalletAttached:this.props.isWalletAttached,
      wallets:[{address:"0x1",name:"wallet-1"}, {address:"0x2",name:"wallet-2"}]
    })
  }

  closeModal() {
    console.log("closeModal");
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
    console.log("open");
  }

  attachWallet() {
    this.openModal();
    console.log("attachWallet");
  }

  addWallet(walletName, walletAddress) {
    var updatedWallet =this.state.wallets;
    updatedWallet.push({address:walletAddress,name:walletName});
    this.setState({ showModal: false, wallets:updatedWallet});
  }

  render() {
    var wallets = this.state.wallets;
    var walletList = wallets.map(function(wallet) {
      return <div className="wallet-list">{wallet.address} {wallet.name}</div>
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
      {this.state.showModal ? <AddWalletModal 
        showModal={this.state.showModal} 
        closeModal={this.closeModal}
        addWallet={this.addWallet}
        /> : null}

      </div>
      )
  }
}

export default Wallet;