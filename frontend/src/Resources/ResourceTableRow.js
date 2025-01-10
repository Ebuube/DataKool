import { useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";

const ResourceTableRow = (row, resourceType) => {
  const id = row[0];
  const navigate = useNavigate();
  console.log(`row is: ${typeof(row)}`);
  console.log(`row value is: ${row}`);
  const cells = row.map((cell, index) => (
    <Table.Cell>{cell}</Table.Cell>
  ));

  const handleRowClick = (id) => {
    navigate(`/${resourceType}/detail/${id}`);
  };
  return (
    <Table.Row
      key={id}
      onClick={() => handleRowClick(id)}
      style={{ cursor: 'pointer'}}
    >
      {/* {cells} */}
      {cells}}
    </Table.Row>
  );
};

export default ResourceTableRow;
