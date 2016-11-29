import React, { Component } from 'react';

import {Day} from './Day'; 

export class Schedule extends Component {
  render() {
    return (
      <div className="Schedule-component">
        <Day user={this.props.user} day="Saturday"/>
        <Day user={this.props.user} day="Sunday"/>
        <Day user={this.props.user} day="Monday"/>
        <Day user={this.props.user} day="Tuesday"/>
        <Day user={this.props.user} day="Wednesday"/>
        <Day user={this.props.user} day="Thursday"/>
        <Day user={this.props.user} day="Friday"/>
      </div>
      )
  }
}

export default Schedule;