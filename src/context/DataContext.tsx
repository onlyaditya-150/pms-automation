// src/context/DataContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProductGroup, SelectedRow, PECTableRow, HarmTableRow, DataContextState } from '../types';

// Create context with default values
const DataContext = createContext<DataContextState>({
  data: [],
  selectedRows: [],
  addSelectedRow: () => {},
  removeSelectedRow: () => {},
  isRowSelected: () => false,
  getSelectedRowsCount: () => 0,
});

// Define props for the context provider
interface DataProviderProps {
  children: ReactNode;
  initialData: ProductGroup[];
}

// Create provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children, initialData }) => {
  const [data] = useState<ProductGroup[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<SelectedRow[]>([]);

  // Function to add a selected row
  const addSelectedRow = (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow) => {
    setSelectedRows(prev => [...prev, { productGroup, tableType, rowData }]);
  };

  // Function to remove a selected row
  const removeSelectedRow = (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow) => {
    setSelectedRows(prev => 
      prev.filter(item => 
        !(item.productGroup === productGroup && 
          item.tableType === tableType && 
          JSON.stringify(item.rowData) === JSON.stringify(rowData))
      )
    );
  };

  // Function to check if a row is selected
  const isRowSelected = (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow): boolean => {
    return selectedRows.some(
      item => 
        item.productGroup === productGroup && 
        item.tableType === tableType && 
        JSON.stringify(item.rowData) === JSON.stringify(rowData)
    );
  };

  // Function to get the count of selected rows for a specific product group and table type
  const getSelectedRowsCount = (productGroup: string, tableType: string): number => {
    return selectedRows.filter(
      item => item.productGroup === productGroup && item.tableType === tableType
    ).length;
  };

  const value = {
    data,
    selectedRows,
    addSelectedRow,
    removeSelectedRow,
    isRowSelected,
    getSelectedRowsCount,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook to use the data context
export const useData = () => useContext(DataContext);

// Export context for direct use
export default DataContext;