import PropTypes from "prop-types";
import "@/style/components/DataTableSearch.css";

/**
 * Search input component that filters the table rows based on a search value.
 */
function DataTableSearch({ searchText, onSearch }) {
  return (
    <div className="datatable__search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default DataTableSearch;

DataTableSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
