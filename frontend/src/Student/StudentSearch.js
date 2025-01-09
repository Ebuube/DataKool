import { Component } from "react";
import ResourceSearch from '../Resources/ResourceSearch.js';

class StudentSearch extends Component {
  render() {
    return(
      <div>
        <ResourceSearch />
        <p>ResourceTable</p>
      </div>
    );
  };
};

export default StudentSearch;
