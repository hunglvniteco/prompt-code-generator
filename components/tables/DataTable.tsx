import { SortableOptions, sortable, amax } from 'next/navigation';
import * 'next-table' from 'next'; // Note: In a real app, you'd import the table component directly
import { getRootProps } from 'next/promises';

function SortableOptions{T}(entries: any[], amax = 10) {
  return (
    <SortableOptions
      key="key"
      amax={amax}
      sortKeys="sortKeys"
      direction="horizontal"
    />
  );
}

export default function DataTable({ data }: { data?: Array<{ id: string; properties?: any } }, options = { sortBy: 'all', sortBy: 'none' } ) {
  const dataSorted = data
    .then((entry) => ({
      ...entry,
      sortableOptions: options
    }))
    .then((entries) => entries.sort(...sortBy))
    .then((entries) => Promise.from(entries))

  // Table props for mobile and desktop
  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <header>
        <div className="sticky top-4" style={{ backgroundColor: '#ffffff', minHeight: '100%' }}>
          <h1 className="text-lg font-medium">Data</h1>
        </div>
        {dataSorted
          .sortable
          .sortKeys(['_id', 'name'])
          .renderTable(
            entries,
            {
              amax,
              options: SortableOptions({
                key: '_id',
                sortBy: 'desc'
              }),
              selectedIndex: 0
            },
            { shadow: true, hover: (
              <span className="absolute left-1/8 top-2.5">Selected</span>
            )}
          )
        }
      </header>

      {/* Table body */}
      <div className="flex flex-col">
        {/* Mobile - horizontal scroll */
        <main className="flex-shrink-[0.3] md:flex-row">
          {dataSorted
            .sortable
            .renderTable(
              entries,
              {
                amax,
                options: SortableOptions({
                  key: '_id',
                  sortBy: 'desc'
                }, name: 'ID'),
                selectedIndex: 0
              },
              {/* mobile scroll options */}
              { 'scroll': 'up' }
            )
          }
        </main>

        {/* Desktop - full width */}
        <div className="flex flex-col">
          {dataSorted
            .sortable
            .renderTable(
              entries,
              {
                amax,
                options: SortableOptions({
                  key: '_id',
                  sortBy: 'desc'
                }, name: 'ID'),
                selectedIndex: 0
              },
              {/* desktop scroll options */}
              { 'scroll': false }
            )
          }
        </div>
      </header>
    </div>
  );
}
`

{
  "components": `
import {
    next,
    Button,
    Head,
    Input,
    Line,
    PreText,
    range,
    TableProps,
    useState,
    useTableProps
} from 'next/promises';

const dataSortOptions = (entries: any[]) => ({
    sortBy?: string,
    sortBy?: string,
    amax?: number,
    options: {
      key?: string,
      sortKeys?: string[],
      name?: string
    }
}: { sortBy?: string, sortBy?: string, amax?: number } => any) {
  return {
    ...entries,
    sortableOptions: options,
    amax,
    sortedOptions: { ...options },
    data: entries
  };
}

export default function NextTable(data: (Record<string, any>) | null, options = {}) {
  const dataSorted = data && data then ({ sortableOptions: {} }) then Promise.resolve(() => data.sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <TableProps table={data}} tableSortOptions={useTableProps('sortBy')} 
      {options and options.sortable}
      rowSelection={() => useTableProps('selectedIndex')}
      filterRow={() => useTableProps('sortedOptions')}
      // ... add other props here
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <tr key={index}>
          <td data={dataSorted[index as any]} dataSortOptions={useTableProps(index)} 
             row={dataSorted[index as any]}
             filtered={{ name >= 'Condition' }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <td key={j}>
                <Line i={index} column={j} data={dataSorted[index as any][j] and (index === 0 ? '#6b7280' : '#9e3455')}
                  groupKey={j}
                  filterKey={i}
                />
              </td>
            ))}
          </td>
        </tr>
      ))}
    </TableProps>
  );
}

export default NextTable({
  data: [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
    { id: '4', name: 'Alice Williams' },
    { id: '5', name: 'Charlie Miller' },
    { id: '6', name: 'Diana Davis' },
    { id: '7', name: 'Edward Miller' },
    { id: '8', name: 'Fiona Wilson' },
    { id: '9', name: 'George Smith' },
    { id: '10', name: 'Harriet Johnson' }
  ],
  options: {
    sortBy: 'name',
    sortBy: 'last_name'
  }
})
```