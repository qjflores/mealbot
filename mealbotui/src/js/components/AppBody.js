import React, { Component } from 'react';

import {About} from './About'; 
import {ProdctFeatures} from './ProdctFeatures'; 
import {PoweredBy} from './PoweredBy'; 

import './../../css/AppBody.css'

export class AppBody extends Component {

	render() {
		return (
			<div className="AppBody">
				<About />
				<ProdctFeatures/>
				<PoweredBy />
				</div>
			)
	}
}

export default AppBody;