import PropTypes from "prop-types";
import "@/style/DataTable.css";

function DataTableHeader({
  columns,
  getCellStyle,
  headerBgColor,
  headerFontColor,
  onEdit,
  onDelete,
  borderStyle,
}) {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th
            className="datatable__th"
            key={col.key}
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
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  borderStyle: PropTypes.string,
};

export default DataTableHeader;
