import React, { Component } from 'react';

import {Login} from './Login';

export class Account extends Component {
  constructor(props) {
    super(props);

  }

	render() {
		return (
			<div className="Account-component">
      <Login />
			</div>
			)
	}
}

export default Account;