import { Component } from "react";
import { Table } from "semantic-ui-react";

class ResourceTable extends Component {
  /*
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
  */
  render() {
    const { headers, rows } = this.props.format;
    const tableHeaders = headers.map((headerCell, index) => (
      <Table.HeaderCell
        key={index}
      >
        {headerCell}
      </Table.HeaderCell>
    ));

    const tableRows = rows.map((row, index) => (
      <Table.Row
        key={row.key}
      >
        <Table.Cell>{row.firstName}</Table.Cell>
        <Table.Cell>{row.lastName}</Table.Cell>
        <Table.Cell>{row.gender}</Table.Cell>
        <Table.Cell>{row.jambRegNo}</Table.Cell>
      </Table.Row>
    ));

    return(
      <Table>
        <Table.Header>
          <Table.Row>
            {tableHeaders}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableRows}
        </Table.Body>
      </Table>
    );
  };
};

export default ResourceTable;
