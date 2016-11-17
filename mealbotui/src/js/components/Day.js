import React, { Component } from 'react';
import {Col, Grid, Row, ButtonGroup, Button} from 'react-bootstrap';

import {MealTicket} from './MealTicket';

import './../../css/Day.css'

export class Day extends Component {
	render() {
		return (
			<div className="Day-component">
        <Grid>
          <Row>
            <Col><div className="day-name">{this.props.day} </div></Col>
            <Col><div className="mb-schedule-button-group">
            <ButtonGroup>
              <Button>Breatfastt</Button>
              <Button>Lunch</Button>
              <Button>Dinner</Button>
            </ButtonGroup>
            </div>
            </Col>
          </Row>
        </Grid>
			</div>
			)
	}
}

export default Day;