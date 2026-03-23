import PropTypes from "prop-types";
import "@/style/DataTable.css";
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

DataTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getCellStyle: PropTypes.func.isRequired,
  isLastRow: PropTypes.bool,
};

export default DataTableRow;
