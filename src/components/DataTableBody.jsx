import PropTypes from "prop-types";
import "@/style/DataTable.css";
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

DataTableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getCellStyle: PropTypes.func.isRequired,
};

export default DataTableBody;
