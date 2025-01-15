import React, { Component } from 'react';
import ErrorPage from './Error/ErrorPage.js';
import StudentCenter from './Center/StudentCenter.js';
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
import { Navigate, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <StudentCenter>
          <Routes>
            <Route index element={<h1>Landing page</h1>} />
            <Route path='*' element={<ErrorPage />} />

            <Route path='/login' element={<Login />} />
            <Route path='/exit' element={<Navigate to='/login' />} />

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

          </Routes>
      </StudentCenter>
    );
  };
};

export default App;
