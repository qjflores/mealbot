import React, { Component } from 'react';

import {Modal, Button, DropdownButton, MenuItem} from 'react-bootstrap';


export class AddBalanceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet1: "",
      balance:0,
      wallets:[]
    };
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.setState({wallets:this.props.wallets});
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.setState({wallets:this.props.wallets});
  }

  handleWalletChange(wallet) {
    console.log("handleWalletChange");
    this.setState({wallet1:wallet});
    
  }

  handleBalanceChange(event) {
    this.setState({balance: event.target.value});
  }

  render() {
    var wallets = this.props.wallets;
    var handleWalletChange = this.handleWalletChange;
    var walletList = wallets.map(function(wallet) {
      return <MenuItem className="" key={wallet.key} value={wallet} eventKey={wallet.key} onClick={() => handleWalletChange(wallet)}>{wallet.address} {wallet.name}</MenuItem>
      })

    return(
      <div className="AddBalanceModal">
        <Modal show={this.props.showBalanceModal} onHide={this.props.closeBalanceModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Balance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Add Balance from Wallet</p>
            <label>
              <DropdownButton id="dropdown-wallets" title="Select Wallet">
                {walletList}
              </DropdownButton>
              <input value={this.state.wallet1["name"]} onChange={this.handleWalletChange} placeholder={this.state.wallet1["name"]} disabled/>
            </label>
            <label>
            Balance:
            <input value={this.state.balance} onChange={this.handleBalanceChange}/>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.addBalance(this.state.wallet,this.state.balance)}>Add Balance</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default AddBalanceModal;