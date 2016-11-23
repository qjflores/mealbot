import React, { Component } from 'react';

import {Modal, Button} from 'react-bootstrap';

export class AddBalanceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet:null,
      balance:0
    };
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
  }

  handleWalletChange(event) {
    this.setState({wallet: event.target.value});
  }

  handleBalanceChange(event) {
    this.setState({balance: event.target.value});
  }

  render() {
    return(
      <div className="AddBalanceModal">
        <Modal show={this.props.showBalanceModal} onHide={this.props.closeBalanceModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Balance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Add Balance from Wallet</p>
            <label>
            Wallet:
            <input value={this.state.wallet} onChange={this.handleWalletChange}/>
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