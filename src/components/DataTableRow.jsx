import PropTypes from "prop-types";
import "@/style/DataTable.css";
import DataTableCell from "./DataTableCell";
import DataTableActions from "./DataTableActions";

/**
 * Table row component responsible for rendering a single row
 * with its cells and optional action buttons.
 *
 * @param {Object} props
 * @param {Object} props.row - The data object for the current row
 * @param {Array<Object>} props.columns - Column definitions (key + title)
 * @param {Function} props.getCellStyle - Function returning styles for each cell
 * @param {boolean} [props.isLastRow] - Indicates if this is the last row (used for styling)
 * @param {Function} [props.onEdit] - Callback triggered when edit action is invoked
 * @param {Function} [props.onDelete] - Callback triggered when delete action is invoked
 * @param {string} [props.borderStyle] - CSS border style applied to cells
 * @param {string} [props.actionEditColor] - Background color for edit button
 * @param {string} [props.actionDeleteColor] - Background color for delete button
 * * @param {string} [props.editLabel] - Accessible label for the edit button
 * @param {string} [props.deleteLabel] - Accessible label for the delete button
 */
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
  editLabel,
  deleteLabel,
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
          editLabel={editLabel}
          deleteLabel={deleteLabel}
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
  editLabel: PropTypes.string,
  deleteLabel: PropTypes.string,
};

export default DataTableRow;
