import React, { Component } from 'react';

import {About} from './About';
import {ProdctFeatures} from './ProdctFeatures';
import {PoweredBy} from './PoweredBy';

import './../../css/Home.css'

export class Home extends Component {
	render() {
		return (
			<div className="Home-component">
			<About />
			<ProdctFeatures />
			<PoweredBy />
			</div>
			)
	}
}

export default Home;