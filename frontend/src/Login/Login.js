import React, { Component } from "react";
import { Divider, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import LoginForm from './LoginForm.js';
import './Login.css';
import Footer from "../Layout/Footer.js";

class Login extends Component {
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
                <LoginForm />
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

export default Login;
