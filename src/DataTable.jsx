import "@/style/DataTable.css";
import PropTypes from "prop-types";
import DataTableHeader from "./components/DataTableHeader";
import DataTableBody from "./components/DataTableBody";
import DataTableSortDropdown from "./components/DataTableSortDropdown";
import DataTableSearch from "./components/DataTableSearch";
import DataTablePagination from "./components/DataTablePagination";
import { filterData, sortData, paginateData } from "./utils.js";
import { useState } from "react";

/**
 * Main DataTable component that displays data in a table.
 *
 * @param {Array} columns - Column definitions — key, title, type
 * @param {Array} data - Row data — each row must have a unique id
 * @param {string} headerBgColor - Header background color
 * @param {string} headerFontColor - Header text color
 * @param {string} fontFamily - Table font family
 * @param {string} borderColor - Table border color
 * @param {string} boxShadow - Table box shadow
 * @param {boolean} searchable - Enable search input
 * @param {string} searchPosition - Search input position ("left" or "right")
 * @param {boolean} sortable - Enable sort dropdown
 * @param {string} sortPosition - Sort dropdown position ("left" or "right")
 * @param {string} sortPlaceholder - Default text in sort dropdown
 * @param {string} sortLabel - Label before sort dropdown
 * @param {boolean} headerSortable - Enable sorting by clicking column headers
 * @param {Function} onEdit - Called with row data when Edit is clicked
 * @param {Function} onDelete - Called with row data when Delete is clicked
 * @param {string} actionEditColor - Edit button background color
 * @param {string} actionDeleteColor - Delete button background color
 * @param {boolean} pagination - Enable pagination
 * @param {number} rowsPerPage - Number of rows per page
 * @param {string} paginationBgColor - Pagination button background color
 * @param {string} paginationActiveTextColor - Active page text color
 * @param {string} paginationTextColor - Pagination text color
 * @param {string} tableLabel - Accessible label for the table
 * @param {string} searchLabel - Accessible label for the search input
 * @param {string} previousLabel - Accessible label for the previous page button
 * @param {string} nextLabel - Accessible label for the next page button
 * @param {string} sortByLabel - Accessible label for the sort dropdown
 * @param {string} toggleDirectionLabel - Accessible label for the toggle direction button
 * @param {string} editLabel - Accessible label for the edit button
 * @param {string} deleteLabel - Accessible label for the delete button
 */
export function DataTable({
  columns,
  data,
  headerBgColor = "#cccccc",
  headerFontColor = "#FFFFFF",
  fontFamily = "sans-serif",
  borderColor = "#000000",
  boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)",
  tableLabel = "Data table",
  searchLabel = "Search",
  sortByLabel = "Sort by column",
  toggleDirectionLabel = "Switch sort order",
  editLabel = "Edit",
  deleteLabel = "Delete",
  searchable = false,
  previousLabel = "Previous page",
  nextLabel = "Next page",
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
  pagination = false,
  rowsPerPage = 10,
  paginationBgColor = "#FFFFFF",
  paginationActiveTextColor = "#000000",
  paginationTextColor = "#000000",
}) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const sortedData = sortData(data, sortKey, sortDirection, columns);
  const filteredData = filterData(sortedData, columns, searchText);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = pagination
    ? paginateData(filteredData, currentPage, rowsPerPage)
    : filteredData;

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
              dropdownLabel={sortLabel}
              sortByLabel={sortByLabel}
              toggleDirectionLabel={toggleDirectionLabel}
            />
          )}
        </div>

        <div className="datatable-header-right">
          {searchable && searchPosition === "right" && (
            <DataTableSearch
              searchText={searchText}
              onSearch={setSearchText}
              searchLabel={searchLabel}
            />
          )}

          {sortable && sortPosition === "right" && (
            <DataTableSortDropdown
              columns={columns}
              sortKey={sortKey}
              onSort={handleSort}
              onToggleDirection={handleToggleDirection}
              placeholder={sortPlaceholder}
              dropdownLabel={sortLabel}
              sortByLabel={sortByLabel}
              toggleDirectionLabel={toggleDirectionLabel}
            />
          )}
        </div>
      </div>
      <table
        className="datatable"
        style={{ fontFamily, border: borderStyle, boxShadow }}
        role="table"
        aria-label={tableLabel}
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
          sortKey={sortKey}
          sortDirection={sortDirection}
        />
        <DataTableBody
          data={paginatedData}
          columns={columns}
          getCellStyle={getCellStyle}
          onEdit={onEdit}
          onDelete={onDelete}
          borderStyle={borderStyle}
          actionEditColor={actionEditColor}
          actionDeleteColor={actionDeleteColor}
          editLabel={editLabel}
          deleteLabel={deleteLabel}
        />
      </table>
      {pagination && totalPages > 1 && (
        <DataTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          paginationBgColor={paginationBgColor}
          paginationTextColor={paginationTextColor}
          paginationActiveTextColor={paginationActiveTextColor}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
        />
      )}
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
  pagination: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  paginationBgColor: PropTypes.string,
  paginationActiveTextColor: PropTypes.string,
  paginationTextColor: PropTypes.string,
  tableLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  sortByLabel: PropTypes.string,
  toggleDirectionLabel: PropTypes.string,
  editLabel: PropTypes.string,
  deleteLabel: PropTypes.string,
};

export default DataTable;
