import { Table } from '@tailwindui/react';
import PropTypes from 'prop-types';

const DataTable = ({ data, columns, pagination }) => {
  return (
    <div className="w-full">
      <Table className="min-w-full divide-y border-collapse">
        <thead className="bg-gray-50 text-sm font-medium text-left">
          {columns.map((column) => (
            <th
              key={column.id}