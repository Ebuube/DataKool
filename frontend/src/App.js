import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Login from './Login/Login';


class App extends Component {
 render() {
  return (
    <div className='ui container'>
      {/* <Login logo='/logo.png' alt='DataKool' /> */}
      <Layout>
        <Login logo='/logo.png' alt='DataKool' />
      </Layout>
    </div>
  );
 };
};

export default App;
