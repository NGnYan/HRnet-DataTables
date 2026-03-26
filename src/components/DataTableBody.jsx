import PropTypes from "prop-types";
import "@/style/DataTable.css";
import DataTableRow from "./DataTableRow";

function DataTableBody({
  data,
  columns,
  getCellStyle,
  onEdit,
  onDelete,
  borderStyle,
  actionEditColor,
  actionDeleteColor,
}) {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <DataTableRow
          key={row.id ?? rowIndex}
          row={row}
          columns={columns}
          getCellStyle={getCellStyle}
          isLastRow={rowIndex === data.length - 1}
          onEdit={onEdit}
          onDelete={onDelete}
          borderStyle={borderStyle}
          actionEditColor={actionEditColor}
          actionDeleteColor={actionDeleteColor}
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
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  borderStyle: PropTypes.string,
  actionEditColor: PropTypes.string,
  actionDeleteColor: PropTypes.string,
};

export default DataTableBody;
