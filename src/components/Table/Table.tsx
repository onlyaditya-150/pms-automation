// src/components/Table/Table.tsx

import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { PECTableRow, HarmTableRow, useData } from '../../context/';

interface TableProps<T extends PECTableRow | HarmTableRow> {
  data: T[];
  productGroup: string;
  tableType: string;
  initialVisibleRows?: number;
}

function Table<T extends PECTableRow | HarmTableRow>({
  data,
  productGroup,
  tableType,
  initialVisibleRows = 10,
}: TableProps<T>) {
  const [visibleRows, setVisibleRows] = useState(initialVisibleRows);
  const { isRowSelected, addSelectedRow, removeSelectedRow } = useData();

  const handleCheckboxChange = (rowData: T, checked: boolean) => {
    if (checked) {
      addSelectedRow(productGroup, tableType, rowData);
    } else {
      removeSelectedRow(productGroup, tableType, rowData);
    }
  };

  const handleSeeMore = () => {
    setVisibleRows(prev => prev + 5);
  };

  // Extract headers from the first row of data
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader headers={['Select', ...headers]} />
        <TableBody
          data={data.slice(0, visibleRows)}
          onCheckboxChange={handleCheckboxChange}
          isRowSelected={(rowData) => isRowSelected(productGroup, tableType, rowData)}
        />
      </table>
      {visibleRows < data.length && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;