import { Component } from "react";
import ResourceSearch from '../Resources/ResourceSearch.js';
import ResourceTable from '../Resources/ResourceTable.js';

class StudentSearch extends Component {
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
        />
        <ResourceTable
          format={table_format}
        />
      </div>
    );
  };
};

export default StudentSearch;
