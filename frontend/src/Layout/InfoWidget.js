import React, { Component } from 'react';
import './InfoWidget.css';


class InfoWidget extends Component {
  render() {
    return (
      <div className='ui grid'>
        <div className='thirteen wide column right aligned middle aligned reduced-margin'>
          <p>{this.props.role}</p>
          <p>{this.props.username}</p>
        </div>
        <div className='three wide column'>
          <img
              className='ui big avatar middle aligned image'
              src={this.props.userPhoto}
              alt='User profile'
            />
        </div>
      </div>
    );
  };
}

export default InfoWidget;
