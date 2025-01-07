import React, { Component } from 'react';
import Login from './Login/Login.js';
import Layout from './Layout/Layout.js';
import Profile from './Profile/Profile.js';
import {
  Container,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Layout>
          {/* <Login /> */}
          <Profile />
        </Layout>
      </Container>
    );
  }
}

export default App;
