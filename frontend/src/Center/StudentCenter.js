import { Component } from "react";
import { Container } from "semantic-ui-react";

class StudentCenter extends Component {
  render() {
    return(
      <Container fluid>
        {this.props.children}
      </Container>
    );
  };
};

export default StudentCenter;
