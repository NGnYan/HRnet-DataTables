import PropTypes from "prop-types";
import "@/style/components/DataTablePagination.css";

/**
 * Pagination component for the DataTable.
 */
function DataTablePagination({
  currentPage,
  totalPages,
  onPageChange,
  paginationBgColor,
  paginationActiveTextColor,
  paginationTextColor,
}) {
  return (
    <div className="datatable__pagination">
      <button
        className="datatable__pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
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
        aria-label="Next page"
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
};

export default DataTablePagination;
