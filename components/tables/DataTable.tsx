import { Table, Tbody, Th, Td, Tr } from '@tailwind-elements/react';
import Link from 'next/link';

// Define your data table component
function DataTable() {
  return (
    <Table>
      {/* Header */}
      <thead>
        <Tr className="bg-gray-50">
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
          <Th aria-sortable="true">Action</Th>
        </Tr>
      </thead>

      {/* Body */}
      <tbody>
        {loading ? (
          <Tr className="bg-gray-50">
            <Td>Loading...</Td>
          </Tr>
        ) : data.length === 0 ? (
          <Tr className="bg-gray-50">
            <Td colSpan={4}>No data available</Td>
          </Tr>
        ) : (
          data.map((item, index) => (
            <Tr key={index} className="border-b border-gray-100 even:bg-gray-100 odd:bg-white hover:bg-gray-200">
              <Td>{item.column1}</Td>
              <Td>{item.column2}</Td>
              <Td>{item.column3}</Td>
              <Td>
                <Link href="/action-page" className="px-4 py-2 rounded-md text-blue-500 hover:bg-blue-600">
                  Action
                </Link>
              </Td>
            </Tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default DataTable;