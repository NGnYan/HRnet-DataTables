import PropTypes from "prop-types";
import "@/style/DataTable.css";
import DataTableCell from "./DataTableCell";
import DataTableActions from "./DataTableActions";

function DataTableRow({
  row,
  columns,
  getCellStyle,
  isLastRow,
  onEdit,
  onDelete,
  borderStyle,
  actionEditColor,
  actionDeleteColor,
}) {
  return (
    <tr>
      {columns.map((col, index) => (
        <DataTableCell
          key={col.key}
          value={row[col.key]}
          style={getCellStyle(index, isLastRow)}
        />
      ))}

      {(onEdit || onDelete) && (
        <DataTableActions
          row={row}
          onEdit={onEdit}
          onDelete={onDelete}
          isLastRow={isLastRow}
          borderStyle={borderStyle}
          actionEditColor={actionEditColor}
          actionDeleteColor={actionDeleteColor}
        />
      )}
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
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  borderStyle: PropTypes.string,
  actionEditColor: PropTypes.string,
  actionDeleteColor: PropTypes.string,
};

export default DataTableRow;
