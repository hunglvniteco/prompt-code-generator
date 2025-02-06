```javascript
import {
  Array,
  Object,
  { render: () => return this },
  @next/jest-table as Table,
  TableOptions,
  TableProps,
  // For mobile view styling
  window as WindowConfig,
  // For sort functionality (you would need to add this with additional dependencies)
} from '@next/jest-table';

const sampleData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `$user.email ${i + 1}`,
  phone: `@${i + 1}`,
  active: false,
  joined: `${i + 1}`,
  status: 'active',
  filteredBy: {
    email: i === 0 ? null : 'email must start with user@example.com',
    phone: i === 0 ? null : 'phone number must be 12 digits long'
  }
});

const TableOptionsOptions = {
  mobile: {
    minRows: 1,
    fontSize: 1rem,
   -xs: { fontSize: 4 },
    xss: {} // Handle heavy data if needed
  },
  header: {
    show: true,
    shadow: 'none',
    overflowX: 'auto'
  }
};

export function DataTable() {
  const [sortColumns, setSortColumns] = TableOptions(['name', 'email'], { index: [0, 1] });
  const [activeRows, setActiveRows] = TableProps({ expanded: false, activeColumn: 0 });

  return (
    <div className={ mobile ? 'ml-4' : 'min-h-screen' } render>
      <TableOptions
        options={TableOptionsOptions}
        onPointerHover={() => { setSortColumns([1, 0]); }}
      >
        <thead className="top border-b">
          <tr>
            <th>
              <a role="button" aria-label="Quick Access" disabled>Quick Access</a>
            </th>
            <th column:active>
              <TableHeaderHeader
                header={sampleData.map((d, i) => ({ id: i + 1, data: d }))
                  .sort((a, b) => a.data.name.localeCompare(b.data.name))
                  .filter(d => d.active)
                  .map((d, i) => ({
                    data,
                    isSorted
                  }))
              }
              <TableHeaderHeader
                header={sampleData.map((d, i) => ({ id: i + 1, data: d }))
                  .sort((a, b) => a.data.name.localeCompare(b.data.name))
                  .filter(d => d.active)
                  .map(d => ({
                    data,
                    isSorted
                  }))
              />
              <TableHeaderHeader
                header={sampleData.map((d, i) => ({ id: i + 1, data: d }))
                  .sort((a, b) => a.data.name.localeCompare(b.data.name))
                  .filter(d => d.active)
                  .map(d => ({
                    data,
                    isSorted
                  }))
              />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sampleData.map((d, i) => (
            <Tr key={i}>
              <Td column={0} active>{d.name}</td>
              <Td column={1} active>{d.email}</td>
              <Td column={2} active>{d.phone}</td>
              <Td column={3} active={d.active} and not d.active > inactive</td>
              <Tds className="ds-auto">
                {sortColumns.every((col, idx) => {
                  if (idx === 0 || idx === 1) return true;
                  return col !== 2 && col !== 3;
                })}
              </ds-auto>
              {activeRows && (
                <TD column={0}>
                  <a href="#" style={{掩ood: 'active'} and not d.active}>
                    Select User
                  </a>
                  <div>{d.name}</div>
                </TD>
                {i > 0 && activeRows[i - 1].isSorted && (
                  <div className="text-sm">
                    <span>Before</span>
                    <span>After</span>
                    <span>{activeRows[i - 1].data.join(', ')}</span>
                  </div>
                )}
              )}
            </Tr>
          ))}
        </tbody>
      </TableOptions>
    </div>
  );
}

export default DataTable;
```