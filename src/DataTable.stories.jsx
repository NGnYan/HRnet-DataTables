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
  {
    firstName: "Charlie",
    lastName: "Brown",
    startDate: "2020-11-05",
    department: "Sales",
    dateOfBirth: "1985-12-03",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
  },
  {
    firstName: "Diana",
    lastName: "Evans",
    startDate: "2019-06-22",
    department: "Engineering",
    dateOfBirth: "1992-08-14",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
  },
  {
    firstName: "Ethan",
    lastName: "Miller",
    startDate: "2023-01-10",
    department: "Human Resources",
    dateOfBirth: "1987-05-30",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
  },
  {
    firstName: "Fiona",
    lastName: "Garcia",
    startDate: "2022-09-18",
    department: "Finance",
    dateOfBirth: "1991-11-21",
    city: "Miami",
    state: "FL",
    zipCode: "33101",
  },
];

export const Basic = () => <DataTable columns={columns} data={data} />;
