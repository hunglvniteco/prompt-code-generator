import React from 'react';
import { DataTable } from '@headlessui/react';

const DataTableExample = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    // ... additional data
  ];

  return (
    <DataTable
      columns={[
        { header: 'ID', columnKey: 'id' },
        { header: 'Name', columnKey: 'name' },
        { header: 'Age', columnKey: 'age' }
      ]}
      rows={data}
      pagination={true}
      selectionMode="multiple"
    />
  );
};

export default DataTableExample;