import { describe, it, expect } from "vitest";
import { filterData, sortData, paginateData } from "../utils.js";

const columns = [
  { key: "firstName", title: "First Name", type: "string" },
  { key: "lastName", title: "Last Name", type: "string" },
  { key: "startDate", title: "Start Date", type: "date" },
];

const data = [
  { id: "1", firstName: "Alice", lastName: "Johnson", startDate: "2023-01-10" },
  { id: "2", firstName: "Bob", lastName: "Smith", startDate: "2022-03-15" },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Dallas",
    startDate: "2021-06-20",
  },
];

describe("filterData", () => {
  it("returns all data if searchText is empty", () => {
    const result = filterData(data, columns, "");
    expect(result).toHaveLength(3);
  });

  it("filters by first name", () => {
    const result = filterData(data, columns, "Alice");
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  it("filters case insensitively", () => {
    const result = filterData(data, columns, "alice");
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  it("filters across all columns", () => {
    const result = filterData(data, columns, "Dallas");
    expect(result).toHaveLength(1);
    expect(result[0].lastName).toBe("Dallas");
  });

  it("returns empty array if no match", () => {
    const result = filterData(data, columns, "xyz");
    expect(result).toHaveLength(0);
  });
});

describe("sortData", () => {
  it("returns data unchanged if no sortKey", () => {
    const result = sortData(data, null, "up", columns);
    expect(result).toEqual(data);
  });

  it("sorts alphabetically ascending", () => {
    const result = sortData(data, "firstName", "up", columns);
    expect(result[0].firstName).toBe("Alice");
    expect(result[2].firstName).toBe("Charlie");
  });

  it("sorts alphabetically descending", () => {
    const result = sortData(data, "firstName", "down", columns);
    expect(result[0].firstName).toBe("Charlie");
    expect(result[2].firstName).toBe("Alice");
  });

  it("sorts dates ascending", () => {
    const result = sortData(data, "startDate", "up", columns);
    expect(result[0].startDate).toBe("2021-06-20");
    expect(result[2].startDate).toBe("2023-01-10");
  });

  it("sorts dates descending", () => {
    const result = sortData(data, "startDate", "down", columns);
    expect(result[0].startDate).toBe("2023-01-10");
    expect(result[2].startDate).toBe("2021-06-20");
  });
});

describe("paginateData", () => {
  it("returns the first page", () => {
    const result = paginateData(data, 1, 2);
    expect(result).toHaveLength(2);
    expect(result[0].firstName).toBe("Alice");
  });

  it("returns the second page", () => {
    const result = paginateData(data, 2, 2);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Charlie");
  });

  it("returns empty array if page is out of range", () => {
    const result = paginateData(data, 10, 2);
    expect(result).toHaveLength(0);
  });
});
