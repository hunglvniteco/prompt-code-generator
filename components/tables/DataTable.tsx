import React from 'react';
import { DataTable } from '@headlessui/react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataTableComponent = ({ data }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortByColumnIndex, setSortByColumnIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [rowsPerPage, setRowsPerPage] = useState(limit);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sortColumnIndex,
          sortOrder,
          searchTerm,
          page,
          limit
        })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sortData = (columnIndex, sortOrder) => {
    setSortByColumnIndex(columnIndex);
    setSortOrder(sortOrder);
    fetchData();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    fetchData();
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchData();
  };

  const handleLimitChange = (limit) => {
    setLimit(limit);
    fetchData();
  };

  return (
    <div className="relative overflow-x-auto">
      {loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50">
          <p>Error: {error}</p>
        </div>
      ) : (
        <DataTable
          className="overflow-x-auto border-collapse border-gray-300"
          data={data}
          columns={[
            {
              id: 'name',
              name: 'Name',
              sortable: true,
              filterable: true,
              render: (item) => item.name,
              headerClassName: 'bg-gray-100 text-black',
              cellClassName: 'border-gray-300'
            },
            {
              id: 'email',
              name: 'Email',
              sortable: true,
              filterable: true,
              render: (item) => item.email,
              headerClassName: 'bg-gray-100 text-black',
              cellClassName: 'border-gray-300'
            },
            {
              id: 'status',
              name: 'Status',
              sortable: true,
              filterable: true,
              render: (item) => item.status,
              headerClassName: 'bg-gray-100 text-black',
              cellClassName: 'border-gray-300'
            }
          ]}
          pagination={{
            currentPage,
            totalPages,
            onPageChange: handlePageChange
          }}
        />
      )}
    </div>
  );
};

DataTableComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DataTableComponent;