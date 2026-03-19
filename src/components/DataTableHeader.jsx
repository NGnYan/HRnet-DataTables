import "@/DataTable.css";

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

export default DataTableHeader;
