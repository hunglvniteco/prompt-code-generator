import React from 'react';
import { Table } from 'react-table';

const columns = [
  {
    Header: '#',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
    filterMethod: (filterValue, row) => row.original.name.includes(filterValue),
    cell: row => <span className="text-[#5a59f7]">{row.original.name}</span>,
  },
  {
    Header: 'Email',
    accessor: 'email',
    filterMethod: (filterValue, row) => row.original.email.includes(filterValue),
    cell: row => <span className="text-[#5a59f7]">{row.original.email}</span>,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    cell: row => <span className="text-[#5a59f7]">{row.original.phone}</span>,
  },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  // Add more data as needed
];

const TableComponent = () => {
  return (
    <div className="relative overflow-x-auto">
      <Table columns={columns} data={data}>
        {({ getHeaderProps, headerGroups, rows }) => (
          <>
            <thead {...getHeaderProps()}>
              {headerGroups.map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(column => (
                    <th className="border-b border-gray-200 px-4 py-3 text-left">
                      {column.render('Header')}
                      {column.isSortByActive ? (
                        <span
                          onClick={() =>
                            column.toggleSorting()
                          }
                          className={`cursor-pointer ${
                            column.isSortedDesc ? 'text-red-600' : 'text-gray-500'
                          }`}
                        >
                          {column.canGroup && !column.isSortable
                            ? 'group-hover:text-red-600'
                            : ''}
                          {column.isSortable
                            ? `sort-${column.getIsSorted() === 'asc' ? 'desc' : 'asc'}`
                            : ''}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableProps()}>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  {...row.getToggleRowProps()}
                  className={`${row.isExpanded ? 'bg-white border-l-4 border-l-gray-200' : ''}`}
                >
                  {row.cells.map(cell => {
                    const cellProps = cell.getCellProps();
                    return (
                      <td {...cellProps} className="border-b border-gray-200 px-4 py-3">
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </Table>
    </div>
  );
};

export default TableComponent;