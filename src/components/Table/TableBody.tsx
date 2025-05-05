// src/components/Table/TableBody.tsx

import React from 'react';
import TableRow from './TableRow';
import { PECTableRow, HarmTableRow } from '../../types';

interface TableBodyProps<T extends PECTableRow | HarmTableRow> {
  data: T[];
  onCheckboxChange: (rowData: T, checked: boolean) => void;
  isRowSelected: (rowData: T) => boolean;
}

function TableBody<T extends PECTableRow | HarmTableRow>({
  data,
  onCheckboxChange,
  isRowSelected,
}: TableBodyProps<T>) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, index) => (
        <TableRow
          key={index}
          rowData={row}
          onCheckboxChange={onCheckboxChange}
          isSelected={isRowSelected(row)}
        />
      ))}
    </tbody>
  );
}

export default TableBody;