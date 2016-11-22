import React, { Component } from 'react';

import {Dropdown, MenuItem} from 'react-bootstrap';
import CustomToggle from './CustomToggle';
import CustomMenu from './CustomMenu';


export class SettingsMenu extends Component {
  componentWillMount(){
    console.log("SettingsMenu.componentWillMount");
    console.log(this);
  }

  render() {
    return (
        <div className="SettingsMenu">
          <Dropdown id="dropdown-custom-menu">
            <CustomToggle bsRole="toggle">
              <i className="fa fa-gear fa-5x" onClick={this.props.clickHandler}></i>
            </CustomToggle>
            <CustomMenu bsRole="menu">
              <MenuItem eventKey="1" onClick={this.props.clickKitchenShift}>Kitchen Shifts</MenuItem>
              <MenuItem eventKey="2">Account Settings</MenuItem>
              <MenuItem eventKey="3">Logout</MenuItem>
            </CustomMenu>
          </Dropdown>
        </div>
      )
  }
}

export default SettingsMenu;