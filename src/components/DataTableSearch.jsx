import PropTypes from "prop-types";
import "@/style/components/DataTableSearch.css";

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
