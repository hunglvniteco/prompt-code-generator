import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Input } from '@nextui-org/react';

const DataTable = () => {
  const [data, setData] = useState([
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    // Add more data as needed
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFilteredData(filtered);
  };

  const sortData = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
    }
    const sorted = [...data].sort((a, b) =>
      a[column].localeCompare(b[column], undefined, { sensitivity: 'base' })
    );
    setData(sorted);
  };

  const handleBulkAction = (action) => {
    // Implement bulk action logic here
  };

  return (
    <div className="container mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search..."
        className="p-2 border rounded-md mb-4 w-full max-w-sm focus:outline-none focus:border-blue-500"
      />
      <Table>
        <Thead>
          <Tr>
            <Th
              aria-label="Name"
              onClick={() => sortData('name')}
              role="button"
              className={`border p-2 rounded-md ${
                sortBy === 'name' && sortOrder === 'asc'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Name
            </Th>
            <Th
              aria-label="Age"
              onClick={() => sortData('age')}
              role="button"
              className={`border p-2 rounded-md ${
                sortBy === 'age' && sortOrder === 'asc'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Age
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item, index) => (
            <Tr key={index}>
              <Td className="border p-2 rounded-md">
                {item.name}
              </Td>
              <Td className="border p-2 rounded-md">
                {item.age}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default DataTable;