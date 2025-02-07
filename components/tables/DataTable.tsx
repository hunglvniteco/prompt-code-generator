import React from 'react';
import clsx from 'clsx';
import { DataTable } from '@nextui-org/react';

const DataTableExample = () => {
  const [sortBy, setSortBy] = React.useState(null);
  const [order, setOrder] = React.useState('asc');
  const [filteredData, setFilteredData] = React.useState([]);
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  // Simulate data fetching and filtering
  setTimeout(() => {
    const mockData = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Bob Johnson', age: 40 },
    ];

    setFilteredData(mockData);
    setShowSkeleton(false);
  }, 1000);

  const handleSort = (column) => {
    if (sortBy === column && order === 'asc') {
      setOrder('desc');
    } else {
      setSortBy(column);
      setOrder('asc');
    }
  };

  const handleFilter = (value) => {
    const filtered = mockData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const pagination = {
    totalItems: mockData.length,
    pageSize: 10,
  };

  return (
    <div className="relative overflow-x-auto">
      {showSkeleton && <div>Loading...</div>}
      {!showSkeleton &&
        (<DataTable
          headerColumns={['ID', 'Name', 'Age']}
          data={filteredData}
          isZebra striped
          onRowClick={(row) => console.log(row)}
          pagination={{
            pageSize: pagination.pageSize,
            totalItems: pagination.totalItems,
          }}
          sortConfig={{
            columnId: sortBy,
            direction: order,
          }}
        >
          <DataTable.Header />
          <DataTable.Body />
        </DataTable>
      )}
    </div>
  );
};

export default DataTableExample;