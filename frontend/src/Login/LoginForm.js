import React, { Component } from 'react';


class LoginForm extends Component {
  render() {
    return (
      <form className='ui form'>
        <div className='field'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='myemail@gmail.com'
          />
        </div>
        <div className='field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
          />
        </div>
        <div className='ui bottom attached buttons field'>
          <button
            className='ui left floated button'
            type='button'>
            Login
          </button>
          <button
            className='ui right floated button'
            type='button'>
            Forgot Password
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
