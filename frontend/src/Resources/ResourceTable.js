import { Component } from "react";
import { Table } from "semantic-ui-react";

class ResourceTable extends Component {
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
