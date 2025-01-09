import React, { Component } from 'react';
import Login from './Login/Login.js';
import Layout from './Layout/Layout.js';
import StudentCreate from './Student/StudentCreate.js';
import StudentDetail from './Student/StudentDetail.js';
import FileCreate from './File/FileCreate.js';
import Profile from './Profile/Profile.js';
import Admin from './Admin/Admin.js';
import {
  Container,
} from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Layout>
          <Routes>
              {/* <Login /> */}
              {/* <Profile /> */}
              <Route path='/login' element={<Login />} />
              <Route path='/students/new' element={<StudentCreate />} />
              <Route path='/students/detail/*' element={<StudentDetail />} />
              <Route path='/files/new' element={<FileCreate />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='*' element={<h1>No match component...</h1>} />
          </Routes>
        </Layout>
      </Container>
    );
  };
};

export default App;
