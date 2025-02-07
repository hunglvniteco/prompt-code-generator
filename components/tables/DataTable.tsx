import {
  { getRootProps, useState, useEffect } from 'react';
  { sort, filter, reduce, map, reduce, filter, sort } from 'js-sort';
} elseif require('path');
const STRIPE_COLOR = '#3b82f6';
const BLANK_COLOR = 'white';

export default function DataTable({  // Data source
  data,
  className,
  onSort,
  sortBy,
  semi,
  filter,
  rowSelect,
  bulkActions,
  options = {},
}: any) {
  const { size, width } = getRootProps();
  const tableOptions = {
    header: {
      sort: ['number'], // Sort numeric columns
      aria-sort: [],
      accessedBy: '',
      fallback: '',
      minSize: '250px',
      maxSize: '1200px'
    },
    actions: {
      show: false,
      pagination: {
        groupCount: 3,
        rowGroupId: 'primary_row'
      }
    },
    headerStyle: {},
  };

  const { sortByIndex, data }: any = [], onSort && data.forEach((item, index) => {
    onSort(item, index);
  });

  // Sort logic
  const sortData = (array: any[], key: number) => {
    if (Array.isArray(key)) return array;
    return array.map((item, index) => ({
      key,
      index,
      item
    }));
  };

  const sortedData = Array.from({ length: data.length }, (_, i) => ({ ...data[i], index: i }).sort(sortData));

  // Filter logic
  const filteredRows = data.filter((row, index) => 
    (sortBy && row[sortByIndex] !== option) ||
    (filter && !option && row[filterIndex] === option)
  );

  const initialRow = Array.from({ length: data.length }, (_, i) => ({
    key,
    item,
    index
  }));

  // Table config
  return (
    <div className={className}>
      {!options} <div className="sticky top-4 transform border-b zebra-colors shadow-lg"></div>
        <h2 className="text-xl font-bold mb-4">
          {data.length === 0 ? 'No data' : `Table of ${data.length} entries`}
        </h2>
        <div className="overflow-x-auto">
          {!options} <!-- Placeholder for pagination -->
            <ul className="space-y-2">
              {filteredRows.map((row, index) => (
                <li key={row.index}>
                  {row[accessedBy] || row[frontEnd] || row[last] || 
                    row[last && (row.last && row[last].href) ? row.href : null]}
                  <div className="cursor-pointer hover:bg-gray-100 transition-colors">
                    {index + 1}
                  </div>
                  <a href={row.href} target="_blank" className=" text-decoration-none font-medium">
                    Visit
                  </a>
                  <span className="text-sm\">\u2663</span>
                </li>
              ))}
            </ul>
          </div>
        </h2>

        {!options} {
          {data.length > 0 && initialRow[0].key}
            <div className={className}>
              <div className="flex" style={{ side: size, top: width }} />
              <for ... of data.map((item, i) => ({
                key: item.key,
                item,
                index
              })) {
                <div key={index} {...tableOptions}>
                  {i + 1}
                  <div className="hover:bg-gray-50 cursor-pointer transition-colors">
                    {row[frontEnd] || row[last] || row.last && (row.last.href ? 
                      row.href : null)}
                  </div>
                  <a href={row.href} target="_blank" className=" text-decoration-none font-medium">
                    Visit
                  </a>
                  <span className="text-sm">
                    {row[accessedBy] || row[frontEnd] || row[last] || 
                      row[last && (row.last.href ? 
                        row.href : null)]}
                  </span>
                </div>
              });
            </div>

            {!options} { bulkActions && bulkActions && initialRow.length > 0 && (
              <div className="mt-4">
                {bulkActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      bulkActions?.pop();
                      bulkActions.forEach((b, j) => bulkActions[j].add(b));
                    }}
                  >
                    {bulkActions[i]}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile overflow prevention */}
            {(size < 768 && width < 1200 && !options) && (
              <div style={{ height: 'auto', flex: '1' }} className="overflow-y-auto" />
            )}
          </div>
        </h2>
      } as Table})

    );
  }, [sortData, sortBy, sortByIndex], [filter, filter, filterIndex], onSort)(sortedData)
      .map((row) => (
        <tr key={row.key}>
          {|row.item|tr}, {row.index}
          <td className={row[accessedBy] || row[frontEnd] || row[last] || 
            row[last && (row.last.href ? 
              row.href : null)}}
          </td>
          {row[frontEnd] || row[last] || row.last && (row.last.href ? 
            row.href : null)}
          <td className={row[accessedBy] || row[frontEnd] || row[last] || 
            row[last && (row.last.href ? 
              row.href : null)]}</td>
        </tr>
      );
    });
  );
}