import React, { Component } from "react";
import { Container, Divider, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import Header from './Header.js';
import Footer from './Footer.js';
import NavMenu from './NavMenu.js';
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <Container as={Grid}>
        <GridRow>
          <Header />
        </GridRow>
        <Divider />

        <GridRow>
          <Container fluid as={Grid}>
            <GridColumn width={3}>
              <NavMenu />
            </GridColumn>
            <GridColumn width={13}>
              <Segment>
                <Outlet /> {/* Render all the child components */}
              </Segment>
            </GridColumn>
          </Container>
        </GridRow>

        <Divider />
        <GridRow>
          <Footer />
        </GridRow>
      </Container>
    );
  };
};

export default Layout;
