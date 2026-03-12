import "../src/DataTable.css";
import DataTableHeader from "./components/DataTableHeader";
import DataTableBody from "./components/DataTableBody";

export function DataTable({
  columns,
  data,
  headerBgColor = "#cccccc",
  headerFontColor = "#FFFFFF",
  fontFamily = "sans-serif",
  borderColor = "#000000",
  boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)",
}) {
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

  return (
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
        data={data}
        columns={columns}
        getCellStyle={getCellStyle}
      />
    </table>
  );
}

export default DataTable;
