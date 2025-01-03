import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
// import Login from '../Login/Login';


const Layout = ({ children }) => {
  const currentPath = window.location.pathname;

  if (currentPath === '/login') {
    return (
      // <Login logo='/logo.png' alt='DataKool' />
      <>{children}</>
    );
  }

  return (
    <div className='ui grid'>
      <div className='row'>
        <div className='sixteen wide column'>
          <Header logo='/logo.png' />
        </div>
      </div>
      <div className='row'>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='three wide column'>
              <Menu />
            </div>
            <main className='thirteen wide column'>
              {children}
            </main> { /* Other child components */}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='sixteen wide column'>
          <div className='ui divider' />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
