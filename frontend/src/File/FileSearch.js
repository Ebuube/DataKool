import { Component } from "react";
import ResourceSearch from "../Resources/ResourceSearch";
import ResourceTable from "../Resources/ResourceTable";

class FileSearch extends Component {
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
        />
        <ResourceTable
          format={table_format}
        />
      </div>
    );
  };
};

export default FileSearch;
