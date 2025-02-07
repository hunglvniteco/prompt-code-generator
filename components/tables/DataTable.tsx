import React from 'react';
import { DataTable, TableColumn } from 'nextui-org';

const data = [
  // Your data here
];

function DataTableComponent() {
  return (
    <DataTable
      aria-label="Data Table"
      loadingSkeleton={true} // Replace with your actual loading state
      emptyState={<div>No data available</div>}
      errorState={<div>Error fetching data</div>}
      pagination={{
        size: 10,
        onPaginationChange: (page) => console.log(`Page ${page} selected`),
      }}
    >
      <TableColumn header="Name">
        {({ cell }) => cell}
      </TableColumn>
      <TableColumn header="Email">
        {({ cell }) => cell}
      </TableColumn>
      <TableColumn header="Phone">
        {({ cell }) => cell}
      </TableColumn>
    </DataTable>
  );
}

export default DataTableComponent;