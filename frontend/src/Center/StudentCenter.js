import { Component } from "react";
import { Container } from "semantic-ui-react";

class StudentCenter extends Component {
  handleLogin = (event, data) => {
    alert(`Setting user in state over app`);  //
  };

  render() {
    return(
      <Container fluid>
        {this.props.children}
      </Container>
    );
  };
};

export default StudentCenter;
