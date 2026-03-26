import PropTypes from "prop-types";
import "@/style/components/DataTableActions.css";

/**
 * Action buttons component for each row (edit and/or delete).
 */
function DataTableActions({
  row,
  onEdit,
  onDelete,
  isLastRow,
  borderStyle,
  actionEditColor,
  actionDeleteColor,
}) {
  return (
    <td
      className="datatable__actions"
      style={{
        borderTop: "none",
        borderBottom: isLastRow ? "none" : borderStyle,
        borderLeft: borderStyle,
        borderRight: "none",
      }}
    >
      <div className="datatable__actions-wrapper">
        {onEdit && (
          <button
            type="button"
            style={{ backgroundColor: actionEditColor }}
            className="datatable__action-btn datatable__action-btn--edit"
            onClick={() => onEdit(row)}
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            type="button"
            style={{ backgroundColor: actionDeleteColor }}
            className="datatable__action-btn datatable__action-btn--delete"
            onClick={() => onDelete(row)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
          </button>
        )}
      </div>
    </td>
  );
}

DataTableActions.propTypes = {
  row: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  isLastRow: PropTypes.bool,
  borderStyle: PropTypes.string,
  actionEditColor: PropTypes.string,
  actionDeleteColor: PropTypes.string,
};
export default DataTableActions;
