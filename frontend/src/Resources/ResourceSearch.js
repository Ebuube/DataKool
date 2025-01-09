import { Component } from "react";
import { Form } from 'semantic-ui-react';

class ResourceSearch extends Component {
  render() {
    return(
      <Form>
        <Form.Input
          icon='user'
          iconPosition='right'
          placeholder='Search user ...'
        />
      </Form>
    );
  };
};

export default ResourceSearch;
