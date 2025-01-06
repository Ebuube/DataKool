import React, { Component } from "react";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Container as={Grid}>
        <GridColumn textAlign='left' width={8}>
          <Image size='small' src='/logo.png' />
        </GridColumn>
        <GridColumn textAlign='right' width={8}>
          Info
        </GridColumn>
      </Container>
    );
  };
};

export default Header;
