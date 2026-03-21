import PropTypes from "prop-types";
import "@/DataTable.css";

function DataTableSortDropdown({
  columns,
  sortKey,
  onSort,
  onToggleDirection,
}) {
  return (
    <div className="datatable__sort-dropdown">
      <select value={sortKey ?? ""} onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort by...</option>
        {columns.map((col) => (
          <option key={col.key} value={col.key}>
            {col.title}
          </option>
        ))}
      </select>

      {sortKey && (
        <span className="datatable__direction-btn" onClick={onToggleDirection}>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M6 2L9 5H3L6 2Z" fill="currentColor" />
            <path d="M6 10L3 7H9L6 10Z" fill="currentColor" />
          </svg>
        </span>
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
};

export default DataTableSortDropdown;
