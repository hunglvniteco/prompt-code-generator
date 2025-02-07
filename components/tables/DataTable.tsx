import React, { useState } from 'react';
import DataTable from '@nextui-org/react-data-table';
import '@nextui-org/react-data-table/styles.css';

const Table = () => {
  const [data] = useState([
    // Add your data here
  ]);

  const columns = [
    {
      header: 'Name',
      key: 'name',
      render: (item) => (
        <div className="flex items-center justify-start">
          {item.name}
        </div>
      ),
      cellStyle: ({ rowIndex }) =>
        rowIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'
    },
    {
      header: 'Age',
      key: 'age',
      render: (item) => <div>{item.age}</div>,
      cellStyle: ({ rowIndex }) =>
        rowIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'
    },
    // Add more columns as needed
  ];

  const onSort = (column, direction) => {
    // Handle column sorting logic here
  };

  const onFilter = ({ columnKey, value }) => {
    // Handle text filtering logic here
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      sortOnHover={true}
      pagination={{
        pageSize: 10,
        perPageOptions: [5, 10, 20],
        disabled: false,
        align: 'center'
      }}
      actionCell={(record) => (
        <div className="flex items-center justify-end">
          <button
            className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
            onClick={() =>
              handleAction(record)
            }
          >
            Action
          </button>
        </div>
      )}
    />
  );
};

export default Table;