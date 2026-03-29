import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
};

const columns = [
  { key: "firstName", title: "First Name", type: "string" },
  { key: "lastName", title: "Last Name", type: "string" },
  { key: "startDate", title: "Start Date", type: "date" },
  { key: "department", title: "Department", type: "string" },
  { key: "dateOfBirth", title: "Date of Birth", type: "date" },
  { key: "city", title: "City", type: "string" },
  { key: "state", title: "State", type: "string" },
  { key: "zipCode", title: "Zip Code", type: "string" },
];

const data = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    startDate: "2023-01-10",
    department: "Marketing",
    dateOfBirth: "1990-05-12",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: "2",
    firstName: "Emma",
    lastName: "Smith",
    startDate: "2022-03-15",
    department: "Engineering",
    dateOfBirth: "1988-09-22",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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

export const DataTableColor = () => (
  <DataTable columns={columns} data={data} headerBgColor="#87A353" />
);

export const DataTableDropdownSort = () => (
  <DataTable
    columns={columns}
    data={data}
    sortable={true}
    sortPosition="right"
    sortLabel="Sort by :"
    sortPlaceholder="-"
  />
);

export const DataTableHeaderSort = () => (
  <DataTable columns={columns} data={data} headerSortable={true} />
);

export const DataTableSearch = () => (
  <DataTable
    columns={columns}
    data={data}
    searchable={true}
    searchPosition="left"
  />
);

export const DataTableActions = () => (
  <DataTable
    columns={columns}
    data={data}
    onDelete={(row) => console.log("delete", row)}
    onEdit={(row) => console.log("edit", row)}
    actionEditColor="#cccccc"
    actionDeleteColor="#e05252"
  />
);

export const DataTablePagination = () => (
  <DataTable
    columns={columns}
    data={data}
    pagination={true}
    rowsPerPage={1}
    paginationBgColor="#87A353"
    paginationActiveTextColor="#FFFFFF"
    paginationTextColor="#000000"
  />
);

export const FullDataTable = () => (
  <DataTable
    columns={columns}
    data={data}
    headerBgColor="#87A353"
    searchable={true}
    sortable={true}
    headerSortable={true}
    sortPlaceholder="-"
    searchPosition="left"
    sortPosition="right"
    sortLabel="Sort by :"
    onDelete={(row) => console.log("delete", row)}
    onEdit={(row) => console.log("edit", row)}
    actionEditColor="#87A353"
    actionDeleteColor="#e05252"
  />
);
