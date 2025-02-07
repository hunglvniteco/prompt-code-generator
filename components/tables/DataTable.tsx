import React from 'react';
import { Table } from '@nextui-org/react';

const data = [
  // Your data array here
];

const DataTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <Table aria-label="Data Table" variant="compact">
      <Table.Head>
        {columns.map((column) => (
          <Table.HeaderCell key={column.key}>
            <div className="flex items-center gap-2">{column.label}</div>
            <span
              role="button"
              tabIndex={0}
              aria-label={`Sort by ${column.label}`}
            >
              <table class="sort-by-icon"></table>
            </span>
          </Table.HeaderCell>
        ))}
      </Table.Head>

      <Table.Body>
        {data.map((item) => (
          <Table.Row key={item.id}>
            {columns.map((column) => (
              <Table.Cell key={column.key}>
                {column.label === 'Name' ? item.name : item[column.key]}
              </Table.Cell>
            ))}
            <Table.Cell>
              <button className="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Edit</button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      {/* Pagination and other components here */}
    </Table>
  );
};

export default DataTable;