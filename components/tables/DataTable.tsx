import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Table from '@/components/Table';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: ({ row }) => row.getValue('name'),
    filterFn: (value, row) => row.getValue('name').includes(value),
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: ({ row }) => row.getValue('age'),
    filterFn: (value, row) => row.getValue('age').includes(value),
  }),
  columnHelper.accessor('action', {
    header: 'Action',
    cell: ({ row }) => (
      <button onClick={() => console.log(`Select ${row.getValue('name')}`)}>Select</button>
    ),
  }),
];

const data = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
  // Add more data as needed
];

function DataTable() {
  return (
    <Table
      columns={columns}
      data={data}
      compactMode={{
        classNamePrefix: 'compact-mode',
        paddingSize: 8,
        rowPaddingSize: 6,
      }}
      errorState={{
        title: 'Error loading data',
        description: 'Please try again later.',
      }}
    />
  );
}

export default DataTable;