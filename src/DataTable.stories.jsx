import React from "react";
import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
};

const columns = [
  { key: "firstName", title: "First Name" },
  { key: "lastName", title: "Last Name" },
  { key: "startDate", title: "Start Date" },
  { key: "department", title: "Department" },
  { key: "dateOfBirth", title: "Date of Birth" },
  { key: "city", title: "City" },
  { key: "state", title: "State" },
  { key: "zipCode", title: "Zip Code" },
];

const data = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    startDate: "2023-01-10",
    department: "Marketing",
    dateOfBirth: "1990-05-12",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    startDate: "2022-03-15",
    department: "Engineering",
    dateOfBirth: "1988-09-22",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
  },
];

export const Basic = () => <DataTable columns={columns} data={data} />;
