import "./DataTable.css";
import React from "react";

export function DataTable({
  columns,
  data,
  headerBgColor = "#cccccc",
  headerFontColor = "#FFFFFF",
  fontFamily = "sans-serif",
  borderColor = "#000000",
  boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)",
}) {
  const borderStyle = `0.5px solid ${borderColor}`;

  const getCellStyle = (index, isLastRow = false) => ({
    borderTop: "none",
    borderBottom: isLastRow ? "none" : borderStyle,
    borderLeft: "none",
    borderRight: index === columns.length - 1 ? "none" : borderStyle,
  });

  return (
    <table style={{ fontFamily, border: borderStyle, boxShadow }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
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
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                style={getCellStyle(colIndex, rowIndex === data.length - 1)}
              >
                {row[col.key] || ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
