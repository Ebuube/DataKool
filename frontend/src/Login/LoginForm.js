import { Component } from "react";
import { Button, ButtonGroup, Container, Form, FormField } from "semantic-ui-react";
import './LoginForm.css';
import { Link } from "react-router-dom";

class LoginForm extends Component {
  render() {
    return(
      <Container as={Form} text className="my-login-form" >
        <FormField>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='me@gmail.com'
          />
        </FormField>
        <FormField>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
          />
        </FormField>
        <ButtonGroup attached='bottom'>
          <Button
            as={Link}
            to='/students'
          >
            Login
          </Button>
          <Button>Forgot Password</Button>
        </ButtonGroup>
      </Container>
    );
  };
};

export default LoginForm;
