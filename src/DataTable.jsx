import "@/style/DataTable.css";
import PropTypes from "prop-types";
import DataTableHeader from "./components/DataTableHeader";
import DataTableBody from "./components/DataTableBody";
import DataTableSortDropdown from "./components/DataTableSortDropdown";
import DataTableSearch from "./components/DataTableSearch";
import { useState } from "react";

/**
 * Main DataTable component that displays data in a table.
 */
export function DataTable({
  columns,
  data,
  headerBgColor = "#cccccc",
  headerFontColor = "#FFFFFF",
  fontFamily = "sans-serif",
  borderColor = "#000000",
  boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)",
  searchable = false,
  sortable = false,
  headerSortable = false,
  sortPlaceholder = "Sort by",
  searchPosition = "left",
  sortPosition = "right",
  sortLabel = "",
  onEdit,
  onDelete,
  actionEditColor = "#cccccc",
  actionDeleteColor = "#e05252",
}) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [searchText, setSearchText] = useState("");

  if (!columns || columns.length === 0) {
    return <p>No columns defined.</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const borderStyle = `0.5px solid ${borderColor}`;

  const getCellStyle = (index, isLastRow = false) => ({
    borderTop: "none",
    borderBottom: isLastRow ? "none" : borderStyle,
    borderLeft: "none",
    borderRight: index === columns.length - 1 ? "none" : borderStyle,
  });

  const handleSort = (key) => {
    if (!key) {
      setSortKey(null);
      setSortDirection(null);
      return;
    }

    if (sortKey === key) {
      if (sortDirection === "up") setSortDirection("down");
      else if (sortDirection === "down") {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(key);
      setSortDirection("up");
    }
  };

  const handleToggleDirection = () => {
    setSortDirection((prev) => (prev === "up" ? "down" : "up"));
  };

  const sortedData = [...data];

  if (sortKey) {
    sortedData.sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      const col = columns.find((col) => col.key === sortKey);

      let result;
      if (col?.type === "date") {
        result = new Date(valA) - new Date(valB);
      } else if (typeof valA === "number" && typeof valB === "number") {
        result = valA - valB;
      } else {
        result = String(valA).localeCompare(String(valB));
      }

      return sortDirection === "up" ? result : -result;
    });
  }

  let filteredData;

  if (!searchText) {
    filteredData = sortedData;
  } else {
    filteredData = sortedData.filter((row) => {
      return columns.some((col) => {
        const cellValue = String(row[col.key] ?? "").toLowerCase();
        return cellValue.includes(searchText.toLowerCase());
      });
    });
  }

  return (
    <div className="datatable-wrapper">
      <div className="datatable-header">
        <div className="datatable-header-left">
          {searchable && searchPosition === "left" && (
            <DataTableSearch searchText={searchText} onSearch={setSearchText} />
          )}

          {sortable && sortPosition === "left" && (
            <DataTableSortDropdown
              columns={columns}
              sortKey={sortKey}
              onSort={handleSort}
              onToggleDirection={handleToggleDirection}
              placeholder={sortPlaceholder}
              label={sortLabel}
            />
          )}
        </div>

        <div className="datatable-header-right">
          {searchable && searchPosition === "right" && (
            <DataTableSearch searchText={searchText} onSearch={setSearchText} />
          )}

          {sortable && sortPosition === "right" && (
            <DataTableSortDropdown
              columns={columns}
              sortKey={sortKey}
              onSort={handleSort}
              onToggleDirection={handleToggleDirection}
              placeholder={sortPlaceholder}
              label={sortLabel}
            />
          )}
        </div>
      </div>
      <table
        className="datatable"
        style={{ fontFamily, border: borderStyle, boxShadow }}
        role="table"
        aria-label="Data table"
      >
        <DataTableHeader
          columns={columns}
          getCellStyle={getCellStyle}
          headerBgColor={headerBgColor}
          headerFontColor={headerFontColor}
          onSort={headerSortable ? handleSort : undefined}
          onEdit={onEdit}
          onDelete={onDelete}
          borderStyle={borderStyle}
        />
        <DataTableBody
          data={filteredData}
          columns={columns}
          getCellStyle={getCellStyle}
          onEdit={onEdit}
          onDelete={onDelete}
          borderStyle={borderStyle}
          actionEditColor={actionEditColor}
          actionDeleteColor={actionDeleteColor}
        />
      </table>
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerBgColor: PropTypes.string,
  headerFontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  borderColor: PropTypes.string,
  boxShadow: PropTypes.string,
  sortable: PropTypes.bool,
  headerSortable: PropTypes.bool,
  sortPlaceholder: PropTypes.string,
  sortPosition: PropTypes.oneOf(["left", "right"]),
  sortLabel: PropTypes.string,
  searchable: PropTypes.bool,
  searchPosition: PropTypes.oneOf(["left", "right"]),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  actionEditColor: PropTypes.string,
  actionDeleteColor: PropTypes.string,
};

export default DataTable;
