import React from 'react';
import { DataTable } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const DataTableComponent = () => {
  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      filterable: true,
    },
    {
      key: 'age',
      label: 'Age',
      sortable: true,
      filterable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      filterable: true,
    },
    // Add more columns as needed
  ];

  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    // Add more data as needed
  ];

  return (
    <DataTable 
      variant="compact" 
      pagination 
      scrollX={true} 
      aria-label="Data Table"
    >
      <DataTable.Header columns={columns} />
      <DataTable.Body rows={data} />
    </DataTable>
  );
};

export default DataTableComponent;