import { Component } from "react";
import { Table } from "semantic-ui-react";

class ResourceTable extends Component {
  /*
  const table_format = {
      headers: [
        'Id',
        'First Name',
        'Last Name',
        'Gender',
        'JAMB Reg. No.',
      ],
      type: 'files/students',
      rows: [
        [ 1, 'Resume', '.pdf', 'Emeka Odera', ],
        [ 2, 'Memorandum', '.docx', 'Chidi Ifedi', ],
        [ 3, 'Sitaled-craft', '.png', 'Ebube Onwuta', ],
        [ 4, 'Browse Symptoms and Signs ...', '.pdf', 'Gozie Okafor', ],
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

    const tableRows = rows.map((row, index) => {
      const cells = [];
      for (let x = 0; x < row.length; x++) {
        cells.push(<Table.Cell>{row[x]}</Table.Cell>);
      }
      return (
        <Table.Row
          key={row.key}
        >
          {cells}
        </Table.Row>
      );
    });

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
