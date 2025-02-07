import React, { useState } from 'react';
import clsx from 'clsx';

const DataTable = ({ data, columns }) => {
  const [sortKey, setSortKey] = useState('');
  const [filterText, setTextFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 20 });
  const [selectedRows, setSelectedRows] = useState([]);
  const [mode, setMode] = useState('compact');

  // Simulate loading data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const newData = await response.json();
      setData(newData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSortColumn = (key) => {
    if (!sortKey || sortKey === key) {
      setSortOrder('asc');
    } else if (sortKey === key && sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('');
    }
    setSortKey(key);
  };

  const handleFilterTextChange = (text) => {
    setTextFilter(text);
  };

  const handleRowClick = (row) => {
    if (!selectedRows.includes(row)) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((r) => r !== row));
    }
  };

  const handleBulkAction = () => {
    // Implement bulk action functionality here
  };

  const renderTableHeader = () => (
    <thead className="bg-gray-50">
      {columns.map((column, index) => (
        <th key={index}>
          <div className="flex items-center justify-between px-4 py-2 text-left font-medium text-gray-900 uppercase tracking-wider uppercase text-sm rounded-md cursor-pointer" onClick={() => handleSortColumn(column.key)}>
            {column.title}
            {sortKey === column.key && sortOrder ? (
              <span className={clsx('sr-only', 'text-gray-700')}>{sortOrder}</span>
            ) : null}
          </div>
        </th>
      ))}
      <th className="flex items-center justify-between px-4 py-2 text-right font-medium text-gray-900 uppercase tracking-wider uppercase text-sm rounded-md cursor-pointer">
        Actions
      </th>
    </thead>
  );

  const renderTableBody = () => (
    <tbody className={clsx('bg-white divide-y divide-gray-100 hover:bg-gray-50 shadow sm:rounded-lg')}>
      {loading ? (
        <tr>
          <td colSpan={columns.length + 1} className="py-4">
            Loading...
          </td>
        </tr>
      ) : data.length === 0 ? (
        <tr>
          <td colSpan={columns.length + 1} className="py-4 text-center">
            No results found.
          </td>
        </tr>
      ) : (
        data.map((row, index) => {
          const isSelected = selectedRows.includes(row);
          return (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="px-4 py-2 text-left"
                  onClick={() => handleRowClick(row)}
                >
                  {row[column.key]}
                </td>
              ))}
              <td className="flex items-center justify-between px-4 py-2 text-right">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm rounded-md px-4 py-2 ${
                    isSelected ? 'opacity-80' : ''
                  }`}
                  onClick={() => handleBulkAction()}
                >
                  Bulk Action
                </button>
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );

  const renderPagination = () => (
    <nav className="bg-white rounded-md shadow-sm flex items-center justify-between p-4">
      <button
        type="button"
        onClick={() => setPagination((prev) => ({ ...prev, page: prev.page - 1 }))}
        disabled={!pagination.page}
      >
        Previous
      </button>
      <span className="ml-2 text-gray-700">Page {pagination.page}</span>
      <button
        type="button"
        onClick={() => setPagination((prev) => ({ ...prev, page: prev.page + 1 }))}
        disabled={!data.length || data.length * pagination.pageSize >= data.length}
      >
        Next
      </button>
    </nav>
  );

  const renderFooter = () => (
    <tfoot className="bg-gray-50">
      {renderPagination()}
    </tfoot>
  );

  return (
    <div className={clsx('overflow-x-scroll sm:px-6')} style={{ maxHeight: 'calc(100vh - 72px)' }}>
      <div className="max-w-full mx-auto px-4 py-8">
        <div className={clsx('flex items-center justify-between')}>
          <h2 className="text-2xl font-bold text-gray-900">Data Table</h2>
          <button
            type="button"
            onClick={() => setMode((prev) => (prev === 'compact' ? 'comfortable' : 'compact'))}
            className={clsx('bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm rounded-md px-4 py-2')}
          >
            {mode === 'compact' ? 'Compact Mode' : 'Comfortable Mode'}
          </button>
        </div>
        <div className="mt-8">
          {renderTableHeader()}
          {renderTableBody()}
        </div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default DataTable;