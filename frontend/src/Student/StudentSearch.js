import { Component } from "react";
import ResourceSearch from '../Resources/ResourceSearch.js';

class StudentSearch extends Component {
  render() {
    const form_format = {
      type: 'user'
    };
    return(
      <div>
        <ResourceSearch
          format={form_format}
        />
        <p>ResourceTable</p>
      </div>
    );
  };
};

export default StudentSearch;
