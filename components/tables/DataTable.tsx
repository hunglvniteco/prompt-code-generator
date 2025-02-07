import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const DataTable = ({
  columns,
  rows,
  loading,
  pagination,
  emptyState,
  errorState,
  onSelectRow,
  onBulkActionClick,
  densityMode,
}) => {
  const [sortedColumns, setSortedColumns] = useState(columns);
  const [filteredData, setFilteredData] = useState(rows);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // Sort columns
  const handleSortChange = (column) => {
    let sortedColumnsCopy = [...columns];
    let direction = column.direction || 'asc';
    if (direction === 'asc') {
      sortedColumnsCopy.sort((a, b) => a[column.id] - b[column.id]);
    } else {
      sortedColumnsCopy.sort((a, b) => b[column.id] - a[column.id]);
    }
    setSortedColumns(sortedColumnsCopy);
  };

  // Filter data
  const handleFilterChange = (value) => {
    const filteredDataCopy = rows.filter(row =>
      row[sortedColumns[0].id].toString().toLowerCase()
        .includes(value.toLowerCase())
    );
    setFilteredData(filteredDataCopy);
  };

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handlePaginationChange = (newPage) => {
    setPageIndex(newPage);
  };

  // On row selection
  const handleRowSelection = (row) => {
    onSelectRow(row);
  };

  // On bulk action click
  const handleBulkActionClick = () => {
    onBulkActionClick(filteredData);
  };

  // Render rows
  const renderRows = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row, index) => (
    <tr key={index}>
      {sortedColumns.map(column => (
        <td key={column.id} className={`border border-gray-200 hover:bg-gray-50 ${densityMode === 'compact' ? '' : 'p-4'}`}>
          {column.render(row)}
        </td>
      ))}
    </tr>
  ));

  // Render the table
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full border-collapse border-gray-200 ${densityMode === 'compact' ? '' : 'p-4'}`}>
        <thead className={`bg-gray-50 sticky top-0 z-10`}>
          {sortedColumns.map(column => (
            <th key={column.id} onClick={() => handleSortChange(column)} className="border border-gray-200">
              {column.label}
              {column.sortable && (
                <span className="sr-only">Sort by {column.label}</span>
              )}
            </th>
          ))}
        </thead>
        <tbody className={`${densityMode === 'compact' ? '' : 'p-4'}`}>
          {renderRows}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;