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
        'First Name',
        'Last Name',
        'Gender',
        'JAMB Reg. No.',
      ],
      rows: [
        { key: 1, firstName: 'Ebube', lastName: 'Onwuta', gender: 'Male', jambRegNo: '424dad-dad9', },
        { key: 2, firstName: 'Ada', lastName: 'Egwu', gender: 'Female', jambRegNo: '4aad-4qeda-ad', },
        { key: 3, firstName: 'Victor', lastName: 'Ayomide', gender: 'Male', jambRegNo: '23sf-34c0-2424', },
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
