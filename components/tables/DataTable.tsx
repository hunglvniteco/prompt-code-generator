import React from 'react';
import { createColumnDef } from '@tanstack/react-table';
import { useTable, Column, Row } from '@tanstack/react-table-react-dom/client';

const columns = [
  {
    id: 'name',
    header: 'Name',
    cell: ({ column }) => (
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Filter name..."
          className="rounded border p-1"
          onChange={(e) => column.getFilterValue() === e.target.value ? undefined : e.target.value}
        />
      </div>
    ),
  },
  {
    id: 'age',
    header: 'Age',
    cell: ({ row }) => <span>{row.values.age}</span>,
  },
  {
    id: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <select
        value={row.getValue('status')}
        onChange={(e) => row.setValue('status', e.target.value)}
      >
        <option value="">Select status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    ),
  },
];

const data = [
  { name: 'John Doe', age: 30, status: 'active' },
  { name: 'Jane Smith', age: 25, status: 'inactive' },
  // Add more data as needed
];

export default function DataTable() {
  const [tableState, tableActions] = useTable({
    columns,
    data,
    getPaginationPageCount: () => 1,
    getRowModel: ({ pageData }) => ({
      rows: [...pageData],
    }),
  });

  return (
    <div className="w-full">
      {/* Sticky header */}
      {tableState.getState().pagination.pageIndex === 0 && (
        <div className="sticky top-0 bg-white z-50 px-4 py-2 shadow-md">
          <div className="flex items-center gap-3 justify-between">
            <h1 className="text-lg font-semibold">Data Table</h1>
            {/* Pagination controls */}
            {/* Sortable headers with aria-sort */}
            {/* Row selection with aria-selected */}
            {/* Keyboard navigation */}
          </div>
        </div>
      )}

      {/* Data table */}
      <div className="overflow-x-auto">
        <table {...tableState.getTableProps()}>
          <thead>
            {tableState.getHeaderGroups().map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((header, i) => {
                  const columnDef = columns.find(
                    (column) => column.id === header.columnId
                  );

                  return (
                    <th
                      key={i}
                      scope="col"
                      className={`px-4 py-2 text-left border border-gray-300 ${
                        !header.shouldRenderHeader && 'hidden'
                      }`}
                      {...header.getHeaderGroupProps()}
                      {...column.getHeaderCellProps()}
                    >
                      {columnDef.header}
                      {column.getIsSortedDesc() ? (
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.536 14.57A8.333 8.333 0 1 1 12.47 12.53h4a1 1 0 0 1 0 2H5.106L7.536 14.57a8.333 8.333 0 1 1-12.46 12.53z"
                          />
                        </svg>
                      ) : column.getIsSortedAsc() ? (
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.536 14.57A8.333 8.333 0 1 1-12.47 12.53h4a1 1 0 0 1 0 2H5.106L7.536 14.57A8.333 8.333 0 1 1 12.46 12.53z"
                          />
                        </svg>
                      ) : (
                        <span className="ml-2">{column.columnDef.header}</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...tableState.getTableBodyProps()}>
            {tableState.getRowModel().rows.map((row) => (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellDef = columns.find(
                    (column) => column.id === cell.columnId
                  );

                  return (
                    <td
                      key={cell.index}
                      scope="cell"
                      className={`px-4 py-2 border border-gray-300 ${
                        !cell.shouldRenderCell && 'hidden'
                      }`}
                      {...cell.getCellProps()}
                    >
                      {cellDef.cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
    </div>
  );
}