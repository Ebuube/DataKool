import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

class NavMenu extends Component {
  state = {
    activeItem: ''  /* Default state */
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
      'Admin',
      'Exit',
      ];
    const items = navs.map((nav, index) => (
      <MenuItem
          as={NavLink}
          to={nav.toLowerCase()}
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
