import "@/DataTable.css";

import PropTypes from "prop-types";

function DataTableCell({ value, style }) {
  const renderValue = () => {
    if (value === null || value === undefined) return "";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    return value;
  };

  return (
    <td className="datatable__td" style={style}>
      {renderValue()}
    </td>
  );
}

DataTableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.object,
};

export default DataTableCell;
