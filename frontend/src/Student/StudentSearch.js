import { Component } from "react";
import ResourceSearch from '../Resources/ResourceSearch.js';
import ResourceTable from '../Resources/ResourceTable.js';

class StudentSearch extends Component {
  state = {
    isSearching: false,
    value: '',
  };

  handleSearchChange = (event, data) => {
    const { name, value } = data;
    alert(`${name}: ${value}`);
    this.setState({
      isSearching: true,
      value: value });
  };

  render() {
    const form_format = {
      type: 'user'
    };
    const table_format = {
      headers: [
        'Id',
        'First Name',
        'Last Name',
        'Gender',
        'JAMB Reg. No.',
      ],
      type: 'students',
      rows: [
        [ 1, 'Ebube', 'Onwuta', 'Male', '424dad-dad9', ],
        [ 2, 'Ada', 'Egwu', 'Female', '4aad-4qeda-ad', ],
        [ 3, 'Victor', 'Ayomide', 'Male', '23sf-34c0-2424', ],
      ],
    };

    return(
      <div>
        <ResourceSearch
          format={form_format}
          onChange={this.handleSearchChange}
          isSearching={this.state.isSearching}
          value={this.state.value}
        />
        <ResourceTable
          format={table_format}
        />
      </div>
    );
  };
};

export default StudentSearch;
