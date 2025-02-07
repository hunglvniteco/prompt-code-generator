import React, { useState } from 'react';
import clsx from 'clsx';

const DataTable = () => {
  const [data, setData] = useState([
    // Sample data goes here
  ]);

  const columns = [
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
    { header: 'City', key: 'city' },
  ];

  const [sortColumn, setSortColumn] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (columnKey) => {
    if (columnKey === sortColumn) {
      setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortBy('asc');
    }
  };

  const handleFilter = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
      || item.age.toString().toLowerCase().includes(searchQuery)
      || item.city.toLowerCase().includes(searchQuery)
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortColumn] > b[sortColumn]) return sortBy === 'asc' ? 1 : -1;
    if (a[sortColumn] < b[sortColumn]) return sortBy === 'asc' ? -1 : 1;
    return 0;
  });

  const handleBulkAction = (action) => {
    // Implement bulk action logic here
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-2 border-b-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-300">DataTable</h1>
      </header>
      <div className="flex-grow overflow-x-auto mt-4">
        <table className="w-full table-fixed border-collapse border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className={clsx(
                    {
                      'cursor-pointer': true,
                      'text-right': column.header === 'Age' || column.header === 'City',
                      'hover:text-gray-600 dark:hover:text-gray-400': sortBy !== column.key,
                    },
                    {
                      'border-r border-l dark:border-l dark:border-gray-700': sortColumn !== column.key,
                    }
                  )}
                >
                  <div className="flex items-center justify-between">
                    {column.header}
                    {sortColumn === column.key && (
                      <span
                        className={clsx(
                          {
                            'text-sm text-gray-500 dark:text-gray-300': sortBy !== column.key,
                          }
                        )}
                      >
                        {sortBy === 'asc' ? 'Asc' : 'Desc'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            {sortedData.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;