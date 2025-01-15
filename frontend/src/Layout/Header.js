import React, { Component } from "react";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";
import InfoWidget from './InfoWidget.js';

class Header extends Component {
  render() {
    // user data will be stored in `sessionStorage`
    const user = {
      role: 'Admin',
      username: 'Jane Doe',
      photo: '/Layout/kristy.png',
    }
    return (
      <Container as={Grid}>
        <GridColumn textAlign='left' width={8}>
          <Image size='small' src='/logo.png' />
        </GridColumn>
        <GridColumn textAlign='right' width={8}>
          <InfoWidget data={user} />
        </GridColumn>
      </Container>
    );
  };
};

export default Header;
