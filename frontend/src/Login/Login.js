import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className='ui middle aligned grid layout'>
        <div className='seven wide column background'>
          <img
            className='ui fluid image'
            src='/Login/side-image.svg'
            alt='Background'
          />
        </div>
        <div className='nine wide column'>
          <div className='ui centered grid form-title'>
            <img
              className='row'
              src={this.props.logo}
              alt={this.props.alt}
            />
            <p className='row'>Login to access the portal</p>
          </div>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login;
