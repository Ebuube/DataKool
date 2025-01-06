import React, { Component } from 'react';
import Login from './Login/Login.js';
import {
  Container,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />
      </Container>
    );
  }
}

export default App;
