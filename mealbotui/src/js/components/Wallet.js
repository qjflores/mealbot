import React, { Component } from 'react';

import './../../css/Wallet.css'

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {isWalletAttached: false,
      showModal: false};
    this.attachWallet = this.attachWallet.bind(this);
  }

  componentWillMount() {
    this.setState({isWalletAttached:this.props.isWalletAttached})
  }

  attachWallet() {
    console.log("attachWallet");
  }

  //TODO move wallet list into its own component
  render() {
    var wallets = [
      {pk:1,address:"0x1",name:"wallet-1"}, {pk:2,address:"0x2",name:"wallet-2"}
      ];
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
      </div>
      )
  }
}

export default Wallet;