import PropTypes from "prop-types";
import "@/style/components/DataTableSearch.css";

/**
 * Search input component used to filter table rows.
 *
 * @param {Object} props
 * @param {string} props.searchText - Current search query value
 * @param {Function} props.onSearch - Callback triggered when the search input changes
 * @param {string} [props.searchLabel] - Accessible label for the search input
 */
function DataTableSearch({ searchText, onSearch, searchLabel = "Search" }) {
  return (
    <div className="datatable__search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        aria-label={searchLabel}
        placeholder="Search..."
      />
    </div>
  );
}

export default DataTableSearch;

DataTableSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchLabel: PropTypes.string,
};
