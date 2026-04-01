import PropTypes from "prop-types";
import "@/style/components/DataTableSortDropdown.css";

/**
 * Dropdown component that allows the user to sort the table by a selected column.
 *
 * @param {Array} columns - Column definitions — key, title
 * @param {string} sortKey - Currently selected sort column key
 * @param {Function} onSort - Called with the column key when sort changes
 * @param {Function} onToggleDirection - Called when sort direction is toggled
 * @param {string} placeholder - Default text displayed in the dropdown
 * @param {string} dropdownlabel - Label displayed before the dropdown
 * @param {string} [props.sortByLabel] - Accessible label for the sort dropdown
* @param {string} [props.toggleDirectionLabel] - Accessible label for the toggle direction button

sortByLabel: PropTypes.string,
toggleDirectionLabel: PropTypes.string,
 */
function DataTableSortDropdown({
  columns,
  sortKey,
  onSort,
  onToggleDirection,
  placeholder,
  dropdownLabel,
  sortByLabel = "Sort by column",
  toggleDirectionLabel = "Switch sort order",
}) {
  return (
    <div className="datatable__sort-dropdown">
      {dropdownLabel && (
        <span className="datatable__sort-label">{dropdownLabel}</span>
      )}
      <select
        value={sortKey ?? ""}
        onChange={(e) => onSort(e.target.value)}
        aria-label={sortByLabel}
      >
        <option value="">{placeholder}</option>
        {columns.map((col) => (
          <option key={col.key} value={col.key}>
            {col.title}
          </option>
        ))}
      </select>

      {sortKey && (
        <button
          type="button"
          className="datatable__direction-btn"
          aria-label={toggleDirectionLabel}
          onClick={onToggleDirection}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 2L9 5H3L6 2Z" fill="currentColor" />
            <path d="M6 10L3 7H9L6 10Z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
}

DataTableSortDropdown.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sortKey: PropTypes.string,
  onSort: PropTypes.func.isRequired,
  onToggleDirection: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  dropdownLabel: PropTypes.string,
  sortByLabel: PropTypes.string,
  toggleDirectionLabel: PropTypes.string,
};

export default DataTableSortDropdown;
