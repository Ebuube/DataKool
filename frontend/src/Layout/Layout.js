import React from "react";
import { Container, Divider, Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import Header from './Header.js';
import Footer from './Footer.js';
import NavMenu from './NavMenu.js';

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
      <Divider />
      <GridRow>
        <Container fluid as={Grid}>
          <GridColumn width={3}>
            <NavMenu />
          </GridColumn>
          <GridColumn width={13}>
            <Segment>
              {children}
            </Segment>
          </GridColumn>
        </Container>
      </GridRow>
      <Divider />
      <GridRow>
        <Footer />
      </GridRow>
    </Container>
  )
};

export default Layout;
