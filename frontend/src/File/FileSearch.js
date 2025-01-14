import { Component } from "react";
import ResourceSearch from "../Resources/ResourceSearch";
import ResourceTable from "../Resources/ResourceTable";

class FileSearch extends Component {
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
      type: 'file'
    };
    const table_format = {
      headers: [
        'Id',
        'File Name',
        'Type',
        'Owner',
      ],
      type: 'files',
      rows: [
        [ 1, 'Resume', '.pdf', 'Emeka Odera', ],
        [ 2, 'Memorandum', '.docx', 'Chidi Ifedi', ],
        [ 3, 'Sitaled-craft', '.png', 'Ebube Onwuta', ],
        [ 4, 'Browse Symptoms and Signs ...', '.pdf', 'Gozie Okafor', ],
      ],
    }

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

export default FileSearch;
