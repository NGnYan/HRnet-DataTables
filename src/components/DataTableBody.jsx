import DataTableRow from "./DataTableRow";

function DataTableBody({ data, columns, getCellStyle }) {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <DataTableRow
          key={row.id ?? rowIndex}
          row={row}
          columns={columns}
          getCellStyle={getCellStyle}
          isLastRow={rowIndex === data.length - 1}
        />
      ))}
    </tbody>
  );
}

export default DataTableBody;
