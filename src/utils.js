/**
 * Filters data based on search text across all columns.
 */
export function filterData(data, columns, searchText) {
  if (!searchText) return data;
  return data.filter((row) =>
    columns.some((col) =>
      String(row[col.key] ?? "")
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    ),
  );
}

/**
 * Sorts data based on sort key and direction.
 */
export function sortData(data, sortKey, sortDirection, columns) {
  if (!sortKey) return data;
  return [...data].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    const col = columns.find((col) => col.key === sortKey);

    let result;

    if (col?.type === "date") {
      const dateA = new Date(valA);
      const dateB = new Date(valB);
      if (isNaN(dateA) || isNaN(dateB)) return 0;
      result = dateA - dateB;
    } else if (typeof valA === "number" && typeof valB === "number") {
      if (isNaN(valA) || isNaN(valB)) return 0;
      result = valA - valB;
    } else {
      result = String(valA).localeCompare(String(valB));
    }

    return sortDirection === "up" ? result : -result;
  });
}

/**
 * Paginates data based on current page and rows per page.
 */
export function paginateData(data, currentPage, rowsPerPage) {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  return data.slice(start, end);
}
