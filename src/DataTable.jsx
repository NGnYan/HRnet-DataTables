import "@/DataTable.css";
import PropTypes from "prop-types";
import DataTableHeader from "./components/DataTableHeader";
import DataTableBody from "./components/DataTableBody";
import DataTableSortDropdown from "./components/DataTableSortDropdown";
import { useState } from "react";

export function DataTable({
  columns,
  data,
  headerBgColor = "#cccccc",
  headerFontColor = "#FFFFFF",
  fontFamily = "sans-serif",
  borderColor = "#000000",
  boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)",
  sortable = false,
  sortPlaceholder = "Sort by",
  sortPosition = "left",
  sortLabel = "",
}) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

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
      const col = columns.find((c) => c.key === sortKey);

      let result;
      if (col?.type === "date") {
        result = new Date(valA) - new Date(valB);
      } else {
        result = valA.localeCompare(valB);
      }

      return sortDirection === "up" ? result : -result;
    });
  }

  return (
    <div className="datatable-wrapper">
      {sortable && (
        <div
          className={`datatable__sort-wrapper datatable__sort-wrapper--${sortPosition}`}
        >
          <DataTableSortDropdown
            columns={columns}
            sortKey={sortKey}
            onSort={handleSort}
            onToggleDirection={handleToggleDirection}
            placeholder={sortPlaceholder}
            label={sortLabel}
          />
        </div>
      )}
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
        />
        <DataTableBody
          data={sortedData}
          columns={columns}
          getCellStyle={getCellStyle}
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
  sortPlaceholder: PropTypes.string,
  sortPosition: PropTypes.oneOf(["left", "right"]),
  sortLabel: PropTypes.string,
};

export default DataTable;
