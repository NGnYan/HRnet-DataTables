import PropTypes from "prop-types";
import "@/style/DataTable.css";

/**
 * Table header component responsible for rendering column titles
 * and optional actions column.
 *
 * @param {Object} props
 * @param {Array<Object>} props.columns - Column definitions (key + title)
 * @param {Function} props.getCellStyle - Function returning custom styles for each header cell
 * @param {string} [props.headerBgColor] - Background color of header cells
 * @param {string} [props.headerFontColor] - Text color of header cells
 * @param {Function} [props.onSort] - Callback triggered when a column header is clicked (sorting)
 * @param {Function} [props.onEdit] - Enables "Actions" column if provided
 * @param {Function} [props.onDelete] - Enables "Actions" column if provided
 * @param {string} [props.borderStyle] - CSS border style applied to header cells
 * @param {string} [props.sortKey] - Currently sorted column key
 * @param {string} [props.sortDirection] - Current sort direction ("up" or "down")
 */
function DataTableHeader({
  columns,
  getCellStyle,
  headerBgColor,
  headerFontColor,
  onSort,
  onEdit,
  onDelete,
  borderStyle,
  sortKey,
  sortDirection,
}) {
  const getAriaSort = (key) => {
    if (sortKey !== key) return "none";
    if (sortDirection === "up") return "ascending";
    if (sortDirection === "down") return "descending";
    return "none";
  };
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th
            className="datatable__th"
            key={col.key}
            onClick={() => onSort && onSort(col.key)}
            aria-sort={onSort ? getAriaSort(col.key) : undefined}
            role={onSort ? "button" : undefined}
            tabIndex={onSort ? 0 : undefined}
            onKeyDown={
              onSort
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSort(col.key);
                    }
                  }
                : undefined
            }
            style={{
              ...getCellStyle(index),
              backgroundColor: headerBgColor,
              color: headerFontColor,
            }}
          >
            {col.title}
          </th>
        ))}
        {(onEdit || onDelete) && (
          <th
            className="datatable__th"
            style={{
              backgroundColor: headerBgColor,
              color: headerFontColor,
              borderTop: "none",
              borderBottom: borderStyle,
              borderRight: "none",
              borderLeft: borderStyle,
            }}
          >
            Actions
          </th>
        )}
      </tr>
    </thead>
  );
}

DataTableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getCellStyle: PropTypes.func.isRequired,
  headerBgColor: PropTypes.string,
  headerFontColor: PropTypes.string,
  onSort: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  borderStyle: PropTypes.string,
  sortKey: PropTypes.string,
  sortDirection: PropTypes.string,
};

export default DataTableHeader;
