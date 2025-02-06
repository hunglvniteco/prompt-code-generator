'use client';

import { useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';

const DataTable = ({ columns, data }) => {
  const [filter, setFilter] = useState('');
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setPageSize,
    pageOptions,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const handleFilterChange = (e) => setFilter(e.target.value);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter..."
          className="border p-2 rounded"
          aria-label="Filter table"
        />
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={previousPage} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <button onClick={nextPage} disabled={!canNextPage}>
            {'>'}
          </button>
          <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
      </div>
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead className="bg-gray-200">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-2 text-left cursor-pointer"
                  aria-sort={column.isSorted ? (column.isSortedDesc ? 'descending' : 'ascending') : 'none'}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-300">
          {rows.length > 0 ? (
            rows.map(row => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="hover:bg-gray-100"
                  aria-selected={row.isSelected}
                >
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="p-2">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">No data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;