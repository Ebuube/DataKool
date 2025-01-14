import React, { Component } from "react";
import { Divider, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import LoginForm from './LoginForm.js';
import './Login.css';
import Footer from "../Layout/Footer.js";
import { useNavigate } from "react-router-dom";

class LoginWithoutNavigate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  };

  handleInputChange = (event, data) => {
    /*
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    */
    const { name, value, checked } = data;
    const type = data.type || (checked !== undefined ? 'checkbox' : 'text');

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event, data) => {
    alert('Submitted form successfully');
    this.props.navigate('/students');
  };

  handleForgotPassword = (event, data) => {
    alert('Create new password');
  };

  render() {
    return (
      <div>
        <Grid>
          <GridColumn width={7}>
            <Image
              className="img-to-middle"
              fluid
              src='/Login/side-image.svg'></Image>
          </GridColumn>
          <GridColumn width={9}>
            <Grid>
              <GridRow centered>
                <Image
                  className='img-to-middle'
                  src='/logo.png'
                />
              </GridRow>
              <GridRow>
                <LoginForm
                  onChange={this.handleInputChange}
                  email={this.state.email}
                  password={this.state.password}
                  onSubmit={this.handleSubmit}
                  onForgotPassword={this.handleForgotPassword}
                />
              </GridRow>
            </Grid>
          </GridColumn>
        </Grid>
        <Divider />
        <Footer />
      </div>
    );
  };
};

export default function Login(props) {
  const navigate = useNavigate();
  return <LoginWithoutNavigate
          {...props}
          navigate={navigate}
        />;
};
