# @ngnyan/data-table

A customizable and accessible React data table component with sorting, searching, and action buttons.

## Preview

![Data Table Preview](https://raw.githubusercontent.com/NGnYan/HRnet-DataTables/main/src/assets/preview.png)

## Features

- 🎨 Customizable styles
- 🔍 Searchable table
- 🔃 Sortable columns (dropdown or header click)
- ✏️ Row actions (edit / delete)
- ♿ Accessible 

## Installation

Install the package in your project :
```bash
npm install @ngnyan/data-table
```

Import the CSS in your project :
```jsx
import "@ngnyan/data-table/dist/data-table.css";
```

## Peer Dependencies

This package requires the following peer dependencies to be installed in your project :
```bash
npm install react react-dom
```

| Package | Version |
|---|---|
| `react` | `^18.0.0` or `^19.0.0` |
| `react-dom` | `^18.0.0` or `^19.0.0` |

## Usage 

```jsx
import { DataTable } from "@ngnyan/data-table";
import "@ngnyan/data-table/dist/data-table.css";

const columns = [
  { key: "firstName", title: "First Name", type: "string" },
  { key: "lastName", title: "Last Name", type: "string" },
  { key: "startDate", title: "Start Date", type: "date" },
];

const data = [
  { id: "1", firstName: "John", lastName: "Doe", startDate: "2023-01-10" },
  { id: "2", firstName: "Emma", lastName: "Smith", startDate: "2022-03-15" },
];

function App() {
  return <DataTable columns={columns} data={data} />;
}
```

## Requirements

- React 18 or 19
- Each row in `data` must have a unique `id` field for stable sorting and filtering

## Columns

Each column is an object with the following properties :

| Property | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | ✅ | The key matching the field name in your data object |
| `title` | `string` | ✅ | The label displayed in the column header |
| `type` | `string` | ❌ | `"string"` or `"date"` — used for correct sorting |

```jsx
const columns = [
  { key: "firstName", title: "First Name", type: "string" },
  { key: "lastName", title: "Last Name", type: "string" },
  { key: "dateOfBirth", title: "Date of Birth", type: "date" },
  { key: "startDate", title: "Start Date", type: "date" },
  { key: "department", title: "Department", type: "string" },
];
```

## Data

Each row in `data` is an object. The keys must match the `key` defined in your columns.

```jsx
const data = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-05-12",
    startDate: "2023-01-10",
    department: "Marketing",
  },
  {
    id: "2",
    firstName: "Emma",
    lastName: "Smith",
    dateOfBirth: "1988-09-22",
    startDate: "2022-03-15",
    department: "Engineering",
  },
];
```

> **Note:** Each row must have a unique `id` field. It is used internally for stable sorting and filtering. We recommend using `crypto.randomUUID()` to generate unique ids.

```js
const newEmployee = {
  id: crypto.randomUUID(),
  firstName: "John",
  ...
}
```

## Props

### Display

These props allow you to customize the appearance of the table.

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `array` | required | Column definitions — see [Columns](#columns) |
| `data` | `array` | required | Row data — see [Data](#data) |
| `headerBgColor` | `string` | `"#cccccc"` | Header background color |
| `headerFontColor` | `string` | `"#FFFFFF"` | Header text color |
| `fontFamily` | `string` | `"sans-serif"` | Table font family |
| `borderColor` | `string` | `"#000000"` | Table border color |
| `boxShadow` | `string` | `"0px 4px 12px rgba(0,0,0,0.15)"` | Table box shadow |

### Search

These props allow you to add a search input above the table to filter rows.

| Prop | Type | Default | Description |
|---|---|---|---|
| `searchable` | `bool` | `false` | Enable the search input |
| `searchPosition` | `"left" \| "right"` | `"left"` | Position of the search input |

```jsx
<DataTable
  columns={columns}
  data={data}
  searchable={true}
  searchPosition="left"
/>
```

### Dropdown sort

These props allow you to add a sort dropdown above the table to sort rows by a selected column.

| Prop | Type | Default | Description |
|---|---|---|---|
| `sortable` | `bool` | `false` | Enable the sort dropdown |
| `sortPosition` | `"left" \| "right"` | `"right"` | Position of the sort dropdown |
| `sortPlaceholder` | `string` | `"Sort by"` | Default text displayed in the dropdown |
| `sortLabel` | `string` | `""` | Label displayed before the dropdown |

```jsx
<DataTable
  columns={columns}
  data={data}
  sortable={true}
  sortPosition="right"
  sortPlaceholder="Sort by..."
  sortLabel="Sort :"
/>
```

### Header sort

These props allow you to sort rows by clicking directly on a column header.

| Prop | Type | Default | Description |
|---|---|---|---|
| `headerSortable` | `bool` | `false` | Enable sorting by clicking column headers |

```jsx
<DataTable
  columns={columns}
  data={data}
  headerSortable={true}
/>
```

> **Note:** `sortable` and `headerSortable` can be used together. They share the same sort state. 

### Actions
 
These props allow you to add edit and delete buttons on each row. The column only appears if at least one of `onEdit` or `onDelete` is provided.
 
| Prop | Type | Default | Description |
|---|---|---|---|
| `onEdit` | `function` | `undefined` | Called with the row data when the Edit button is clicked |
| `onDelete` | `function` | `undefined` | Called with the row data when the Delete button is clicked |
| `actionEditColor` | `string` | `"#cccccc"` | Edit button background color |
| `actionDeleteColor` | `string` | `"#e05252"` | Delete button background color |
 
```jsx
<DataTable
  columns={columns}
  data={data}
  onEdit={(row) => console.log("Edit", row)}
  onDelete={(row) => console.log("Delete", row)}
  actionEditColor="#87A353"
  actionDeleteColor="#e05252"
/>
```
 
> **Note:** The `row` parameter contains all the data of the clicked row, including the `id` field.

## Examples

### Basic table
 
```jsx
<DataTable columns={columns} data={data} />
```
 
### Custom header color
 
```jsx
<DataTable
  columns={columns}
  data={data}
  headerBgColor="#87A353"
  headerFontColor="#FFFFFF"
/>
```
 
### With sort dropdown
 
```jsx
<DataTable
  columns={columns}
  data={data}
  sortable={true}
  sortPosition="right"
  sortLabel="Sort by :"
  sortPlaceholder="-"
/>
```
 
### With header click sorting
 
```jsx
<DataTable
  columns={columns}
  data={data}
  headerSortable={true}
/>
```
 
### With search
 
```jsx
<DataTable
  columns={columns}
  data={data}
  searchable={true}
  searchPosition="left"
/>
```
 
### With action buttons
 
```jsx
<DataTable
  columns={columns}
  data={data}
  onEdit={(row) => console.log("Edit", row)}
  onDelete={(row) => console.log("Delete", row)}
  actionEditColor="#87A353"
  actionDeleteColor="#e05252"
/>
```

### Full example

```jsx
import { DataTable } from "@ngnyan/data-table";
import "@ngnyan/data-table/dist/data-table.css";
 
const columns = [
  { key: "firstName", title: "First Name", type: "string" },
  { key: "lastName", title: "Last Name", type: "string" },
  { key: "dateOfBirth", title: "Date of Birth", type: "date" },
  { key: "startDate", title: "Start Date", type: "date" },
  { key: "department", title: "Department", type: "string" },
];
 
const data = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-05-12",
    startDate: "2023-01-10",
    department: "Marketing",
  },
  {
    id: "2",
    firstName: "Emma",
    lastName: "Smith",
    dateOfBirth: "1988-09-22",
    startDate: "2022-03-15",
    department: "Engineering",
  },
];
 
function App() {
  return (
    <DataTable
      columns={columns}
      data={data}
      headerBgColor="#87A353"
      headerFontColor="#FFFFFF"
      searchable={true}
      searchPosition="left"
      sortable={true}
      sortPosition="right"
      sortPlaceholder="Sort by..."
      sortLabel="Sort :"
      headerSortable={true}
      onEdit={(row) => console.log("Edit", row)}
      onDelete={(row) => console.log("Delete", row)}
      actionEditColor="#87A353"
      actionDeleteColor="#e05252"
    />
  );
}
```

## License

MIT

## Author

NGnYan