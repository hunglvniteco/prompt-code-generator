import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@nextui-org/react';
import type { NextPage } from 'next';

const DataTable: NextPage = () => {
  const columns = [
    { id: 'name', name: 'Name' },
    { id: 'age', name: 'Age' },
    { id: 'status', name: 'Status' }
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 30, status: 'Active' },
    { id: 2, name: 'Jane Smith', age: 25, status: 'Inactive' },
    // More data...
  ];

  return (
    <Table>
      <TableHead>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.name}</TableCell>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;