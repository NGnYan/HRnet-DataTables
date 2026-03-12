import DataTableCell from "./DataTableCell";

function DataTableRow({ row, columns, getCellStyle, isLastRow }) {
  return (
    <tr>
      {columns.map((col) => (
        <DataTableCell
          key={col.key}
          value={row[col.key]}
          style={getCellStyle(columns.indexOf(col), isLastRow)}
        />
      ))}
    </tr>
  );
}

export default DataTableRow;
