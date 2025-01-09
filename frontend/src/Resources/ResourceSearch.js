import { Component } from "react";
import { Form } from 'semantic-ui-react';

class ResourceSearch extends Component {
  /* Sample
  const form_format = {
      type: 'user'
    };
  */
 state = {
  isSearching: false,
 };

handleChange = (e) => {
  this.setState({ isSearching: true });
};

  render() {
    const { type } = this.props.format;

    return(
      <Form>
        <Form.Input
          icon={type}
          iconPosition='left'
          placeholder={`Search ${type} ...`}
          onChange={this.handleChange}
          loading={this.state.isSearching}
        />
      </Form>
    );
  };
};

export default ResourceSearch;
