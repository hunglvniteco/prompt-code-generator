import React from 'react';
import { DataTable } from '@nextui-org/react';
import '@nextui-org/theme/dist/system.css';
import '@nextui-org/theme/dist/components.css';

const DataTableExample = () => {
  const columns = [
    {
      name: 'Name',
      key: 'name',
      sortable: true,
      filterable: true,
    },
    {
      name: 'Position',
      key: 'position',
      sortable: true,
      filterable: true,
    },
    {
      name: 'Office',
      key: 'office',
      sortable: true,
      filterable: true,
    },
  ];

  const rows = [
    { id: 1, name: 'John Doe', position: 'Engineer', office: 'New York' },
    // More rows...
  ];

  return (
    <div>
      {/* Zebra striping */}
      <DataTable
        columns={columns}
        rows={rows}
        variant="compact"
        pagination
        showHeaderFooter
        stickyHeader
        stickyActionColumns
      />
    </div>
  );
};

export default DataTableExample;