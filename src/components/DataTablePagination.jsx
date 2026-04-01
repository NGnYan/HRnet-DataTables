import PropTypes from "prop-types";
import "@/style/components/DataTablePagination.css";

/**
 * Pagination component for the DataTable.
 *
 * @param {Object} props
 * @param {number} props.currentPage - The currently active page (1-based index)
 * @param {number} props.totalPages - Total number of available pages
 * @param {Function} props.onPageChange - Callback triggered when the page changes
 * @param {string} [props.paginationBgColor] - Background color for the active page button
 * @param {string} [props.paginationActiveTextColor] - Text and border color for the active page button
 * @param {string} [props.paginationTextColor] - Text color for inactive pagination buttons
 * @param {string} [props.previousLabel] - Accessible label for the previous page button
 * @param {string} [props.nextLabel] - Accessible label for the next page button
 */
function DataTablePagination({
  currentPage,
  totalPages,
  onPageChange,
  paginationBgColor,
  paginationActiveTextColor,
  paginationTextColor,
  previousLabel = "Previous page",
  nextLabel = "Next page",
}) {
  return (
    <div className="datatable__pagination">
      <button
        className="datatable__pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={previousLabel}
        style={{ color: paginationTextColor }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 2L4 6L8 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`datatable__pagination-btn ${currentPage === page ? "datatable__pagination-btn--active" : ""}`}
          style={
            currentPage === page
              ? {
                  backgroundColor: paginationBgColor,
                  borderColor: paginationActiveTextColor,
                  color: paginationActiveTextColor,
                }
              : { color: paginationTextColor }
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="datatable__pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={nextLabel}
        style={{ color: paginationTextColor }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 2L8 6L4 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

DataTablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  paginationBgColor: PropTypes.string,
  paginationActiveTextColor: PropTypes.string,
  paginationTextColor: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
};

export default DataTablePagination;
