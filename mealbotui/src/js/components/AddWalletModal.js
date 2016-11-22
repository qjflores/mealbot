import React, { Component } from 'react';

import {Modal, Button} from 'react-bootstrap';

export class AddWalletModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			walletName:"",
			walletAddress:""
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
	}

	handleNameChange(event) {
		this.setState({walletName: event.target.value});
	}

	handleAddressChange(event) {
		this.setState({walletAddress: event.target.value});
	}

	// DEVELOPER NOTE : how does one validate the information from an account
	render() {
		return(
				<div className="AddWalletModal">
				  <Modal show={this.props.showModal} onHide={this.props.closeModal}>
		        <Modal.Header closeButton>
		          <Modal.Title>Modal heading</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<p> Add a Wallet </p>
		        	<label>
		        	Wallet Name:
		        	<input value={this.state.walletName} onChange={this.handleNameChange}/>
		        	</label>
							<label>
		        	Wallet Address:
		        	<input value={this.state.walletAddress} onChange={this.handleAddressChange}/>
		        	</label>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button onClick={() => this.props.addWallet(this.state.walletName,this.state.walletAddress)}>Add Wallet</Button>
		        </Modal.Footer>
		      </Modal>
				</div>
			)
	}
}

export default AddWalletModal;