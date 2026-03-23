import PropTypes from "prop-types";
import "@/style/DataTable.css";

function DataTableHeader({
  columns,
  getCellStyle,
  headerBgColor,
  headerFontColor,
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
};

export default DataTableHeader;
