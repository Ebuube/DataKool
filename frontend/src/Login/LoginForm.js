import { Component } from "react";
import { Button, ButtonGroup, Container, Form, FormField } from "semantic-ui-react";
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return(
      <Container
        text
        as={Form}
        className="my-login-form"
      >
        <FormField>
          <label>Email</label>
          <Form.Input
            type='email'
            name='email'
            placeholder='me@gmail.com'
            value={this.props.email}
            onChange={this.props.onChange}
          />
        </FormField>
        <FormField>
          <label>Password</label>
          <Form.Input
            type='password'
            name='password'
            placeholder='Password'
            value={this.props.password}
            onChange={this.props.onChange}
          />
        </FormField>
        <ButtonGroup attached='bottom'>
          <Button
            type='submit'
            onClick={this.props.onSubmit}
          >
            Login
          </Button>
          <Button
            type='click'
            onClick={this.props.onForgotPassword}
          >Forgot Password</Button>
        </ButtonGroup>
      </Container>
    );
  };
};

export default LoginForm;
