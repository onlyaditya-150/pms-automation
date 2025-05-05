// src/components/Table/TableRow.tsx

import React from 'react';
import Checkbox from '../Checkbox';
import { PECTableRow, HarmTableRow } from '../../types';

interface TableRowProps<T extends PECTableRow | HarmTableRow> {
  rowData: T;
  onCheckboxChange: (rowData: T, checked: boolean) => void;
  isSelected: boolean;
}

function TableRow<T extends PECTableRow | HarmTableRow>({
  rowData,
  onCheckboxChange,
  isSelected,
}: TableRowProps<T>) {
  return (
    <tr className={isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}>
      <td className="px-6 py-4 whitespace-nowrap">
        <Checkbox
          checked={isSelected}
          onChange={(checked) => onCheckboxChange(rowData, checked)}
        />
      </td>
      {Object.entries(rowData).map(([key, value], cellIndex) => (
        <td
          key={cellIndex}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {value}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;