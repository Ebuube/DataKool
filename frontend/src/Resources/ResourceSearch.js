import { Component } from "react";
import { Form } from 'semantic-ui-react';

class ResourceSearch extends Component {
  /* Sample
  const form_format = {
      type: 'user'
    };
  */

  render() {
    const { type } = this.props.format;

    return(
      <Form>
        <Form.Input
          icon={type}
          iconPosition='left'
          placeholder={`Search ${type} ...`}
          onChange={this.props.onChange}
          loading={this.props.isSearching}
          value={this.props.value}
        />
      </Form>
    );
  };
};

export default ResourceSearch;
