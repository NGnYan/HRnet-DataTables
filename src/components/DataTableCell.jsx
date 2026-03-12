function DataTableCell({ value, style }) {
  return (
    <td className="datatable__td" style={style}>
      {value ?? ""}
    </td>
  );
}

export default DataTableCell;
