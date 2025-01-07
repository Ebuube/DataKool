import React, { Component } from "react";
import { Menu, MenuItem } from "semantic-ui-react";

class NavMenu extends Component {
  state = {
    activeItem: 'Students'  /* Default state */
  };

  handleItemClick = (e, data) => {
    const value = data.name;

    this.setState({
      activeItem: value
    });
  };

  render() {
    const navs = [
      'Students',
      'Files',
      'Profile',
      'Register Admin',
      ];
    const items = navs.map((nav, index) => (
      <MenuItem
          key={index}
          name={nav}
          active={this.state.activeItem === nav}
          onClick={this.handleItemClick}
      />
    ));
    return(
      <Menu fluid vertical tabular>
        {items}
      </Menu>
    );
  };
};

export default NavMenu;
