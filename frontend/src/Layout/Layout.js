import React from "react";
import { Container, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import Header from './Header.js';

const Layout = ({ children }) => {
  const currentPath = window.location.pathname;
  if (currentPath === '/login') {
    // Do not add Header, Menu and Footer
    return (
      <>{children}</>
    );
  }

  return (
    <Container as={Grid}>
      <GridRow>
        <Header />
      </GridRow>
      <GridRow>
        <Container fluid as={Grid}>
          <GridColumn width={3}>
            <p>Menu</p>
          </GridColumn>
          <GridColumn width={13}>
            <Segment>
              {children}
            </Segment>
          </GridColumn>
        </Container>
      </GridRow>
      <GridRow>
        <p>Footer</p>
      </GridRow>
    </Container>
  )
};

export default Layout;
