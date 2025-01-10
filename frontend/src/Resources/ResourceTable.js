import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

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
    const { headers, type, rows } = this.props.format;
    const tableHeaders = headers.map((headerCell, index) => (
      <Table.HeaderCell
        key={index}
      >
        {headerCell}
      </Table.HeaderCell>
    ));

    const tableRows = rows.map((row, index) => {
      const id = row[0];
      const cells = row.map((cell, index) =>
        <Table.Cell
        >
          {cell}
        </Table.Cell>
      );
      return (
        <Table.Row
          key={id}
          style={{ cursor: 'pointer'}}
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
        <Table.Footer>
          <Table.Row>
            <Button
              as={NavLink}
              to={`/${type}/new`}
              attached='bottom'
            >
              New
            </Button>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  };
};

export default ResourceTable;
