import React, { Component } from 'react';
import Login from './Login/Login.js';
import Layout from './Layout/Layout.js';
import {
  Container,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Layout>
          <Login />
        </Layout>
      </Container>
    );
  }
}

export default App;
