import React, { useState } from 'react';
import clsx from 'clsx';
import { Table, Th, Tr, Td, Button, Input, Icon } from '@nextui-org/react';

const DataTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortingColumn, setSortingColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(value)
      )
    );
  };

  const handleSortingClick = (column) => {
    if (sortingColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortingColumn(column);
      setSortOrder('asc');
    }
  };

  const handleSelectionChange = (rows) => {
    console.log(rows.map((row) => row.id));
  };

  return (
    <Table
      keyField="id"
      rows={filteredData}
      selectedKeys={selectedIds || []}
      onSelectionChange={handleSelectionChange}
      shadow="sm"
      css={{ minWidth: '100%', height: '100vh' }}
    >
      <Thead>
        <Tr>
          <Th
            key="title"
            sortDirection={sortingColumn === 'title' ? sortOrder : null}
            onClick={() => handleSortingClick('title')}
          >
            Title
            {sortingColumn === 'title' && (
              <Icon
                size={14}
                color={sortOrder === 'desc' ? 'blue' : 'gray'}
              />
            )}
          </Th>
          {/* Add other columns similarly */}
        </Tr>
      </Thead>
      <Tbody>
        {filteredData.map((item) => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            {/* Add other cells similarly */}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DataTable;