import React, { Component } from 'react';
import InfoWidget from './InfoWidget';


class Header extends Component {
  render() {
    return (
      <div className='ui container'>
        <header className='ui middle aligned grid dividing header'>
          <div className='eight wide column left aligned'>
            <img
              className='ui small image'
              src={this.props.logo}
              alt='logo'
            />
          </div>
          <div className='eight wide column right aligned'>
            <InfoWidget role='Admin' username='Jane Doe' userPhoto='/Layout/kristy.png' />
          </div>
        </header>
      </div>
    );
  };
};

export default Header;
