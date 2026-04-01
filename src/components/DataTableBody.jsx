import PropTypes from "prop-types";
import "@/style/DataTable.css";
import DataTableRow from "./DataTableRow";

/**
 * Table body component that renders all rows.
 *
 * @param {Object} props
 * @param {Array<Object>} props.data - Array of row data objects
 * @param {Array<Object>} props.columns - Column definitions (key + title)
 * @param {Function} props.getCellStyle - Function returning custom styles for each cell
 * @param {Function} [props.onEdit] - Callback triggered when edit action is invoked
 * @param {Function} [props.onDelete] - Callback triggered when delete action is invoked
 * @param {string} [props.borderStyle] - CSS border style applied to rows/cells
 * @param {string} [props.actionEditColor] - Background color for edit button
 * @param {string} [props.actionDeleteColor] - Background color for delete button
 * @param {string} [props.editLabel] - Accessible label for the edit button
 * @param {string} [props.deleteLabel] - Accessible label for the delete button
 */
function DataTableBody({
  data,
  columns,
  getCellStyle,
  onEdit,
  onDelete,
  borderStyle,
  actionEditColor,
  actionDeleteColor,
  editLabel,
  deleteLabel,
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
          editLabel={editLabel}
          deleteLabel={deleteLabel}
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
  editLabel: PropTypes.string,
  deleteLabel: PropTypes.string,
};

export default DataTableBody;
