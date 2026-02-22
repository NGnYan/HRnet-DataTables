import React from "react";

export function DataTables({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[colIndex] || ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTables;
