import React, { Component } from 'react';
import Login from './Login/Login.js';
import Layout from './Layout/Layout.js';
import StudentSearch from './Student/StudentSearch.js';
import StudentCreate from './Student/StudentCreate.js';
import StudentDetail from './Student/StudentDetail.js';
import FileSearch from './File/FileSearch.js';
import FileCreate from './File/FileCreate.js';
import FileDetail from './File/FileDetail.js';
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
          <Routes>
              <Route path='/login' element={<Login />} />

              <Route element={<Layout />}>
                <Route path='students'>
                  <Route index element={<StudentSearch />} />
                  <Route path='new' element={<StudentCreate />} />
                  <Route path='detail/:studentId' element={<StudentDetail />} />
                </Route>

                <Route path='files'>
                  <Route index element={<FileSearch />} />
                  <Route path='new' element={<FileCreate />} />
                  <Route path='detail/:fileId' element={<FileDetail />} />
                </Route>

                <Route path='profile' element={<Profile />} />
                <Route path='admin' element={<Admin />} />
              </Route>

              <Route path='*' element={<h1>No match component...</h1>} />
          </Routes>
      </Container>
    );
  };
};

export default App;
