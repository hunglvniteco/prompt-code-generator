import React, { useState } from 'react';
import clsx from 'clsx';
import { Table } from '@nextui-org/react';

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    // ... additional data
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [sortedData, setSortedData] = useState(data);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(item => item.name.toLowerCase().includes(value));
    setFilteredData(filtered);
  };

  const handleSortChange = ({ column, direction }) => {
    const sorted = [...data].sort((a, b) =>
      a[column] === b[column]
        ? 0
        : direction === 'asc'
          ? a[column] < b[column] ? -1 : 1
          : b[column] < a[column] ? -1 : 1,
    );
    setSortedData(sorted);
  };

  const handleRowSelect = (selected, row) => {
    console.log('Selected row:', selected, 'row data:', row);
  };

  return (
    <div className="container mx-auto">
      <Table
        columns={columns}
        rows={sortedData || filteredData}
        onRowClick={handleRowSelect}
        aria-label="table"
      />
      <div className="mb-4">
        <label htmlFor="filter" className="block text-gray-700 font-medium mb-2">
          Filter:
        </label>
        <input
          type="text"
          id="filter"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500"
          onChange={handleFilterChange}
        />
      </div>
      {/* Pagination and other features can be added here */}
    </div>
  );
};

export default DataTable;