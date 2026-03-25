import PropTypes from "prop-types";
import "@/style/components/DataTableSortDropdown.css";

/**
 * Dropdown component that allows the user to sort the table by a selected column.
 */
function DataTableSortDropdown({
  columns,
  sortKey,
  onSort,
  onToggleDirection,
  placeholder,
  label,
}) {
  return (
    <div className="datatable__sort-dropdown">
      {label && <span className="datatable__sort-label">{label}</span>}
      <select value={sortKey ?? ""} onChange={(e) => onSort(e.target.value)}>
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
          aria-label="Switch sort order"
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
  label: PropTypes.string,
};

export default DataTableSortDropdown;
