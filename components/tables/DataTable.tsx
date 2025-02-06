import React, { useState, useEffect } from 'react';
import { usePagination, useSortBy, useRowSelect, useTable } from 'react-table';
import 'tailwindcss/tailwind.css';

const DataTable = ({ columns, data, loading, error, emptyMessage }) => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      globalFilter: (rows) => rows.filter((row) =>
        Object.values(row.values).some(value => value?.toString().toLowerCase().includes(filter.toLowerCase()))
      ),
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    setGlobalFilter(filter);
  }, [filter]);

  if (loading) {
    return <div className="animate-pulse p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error.message}</div>;
  }

  if (!data.length) {
    return <div className="p-4 text-gray-600">{emptyMessage}</div>;
  }

  return (
    <div className="overflow-auto">
      <input
        type="text"
        placeholder="Filter..."
        className="mb-4 p-2 border"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <table {...getTableProps()} className="min-w-full border border-gray-300">
        <thead className="bg-gray-200 sticky top-0">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border p-2 text-left cursor-pointer"
                  aria-sort={column.isSorted ? (column.isSortedDesc ? 'descending' : 'ascending') : 'none'}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100 even:bg-gray-50">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border p-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="my-4 flex justify-between">
        <button
          onClick={() => setPage(0)}
          disabled={!canPreviousPage}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {'<<'}
        </button>
        <div>
          Page {state.pageIndex + 1} of {pageOptions.length}
        </div>
        <button
          onClick={() => setPage(pageOptions.length - 1)}
          disabled={!canNextPage}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default DataTable;