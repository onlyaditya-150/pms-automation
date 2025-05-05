// src/types/index.ts

// Define type for PEC table rows
export interface PECTableRow {
    "Product Experience Code": string;
    "Previous\nRate (%)": string;
    "Current\nRate (%)": string;
    "Overall\nRate (%)": string;
    [key: string]: string;
  }
  
  // Define type for Harm table rows
  export interface HarmTableRow {
    "Harm": string;
    "Previous\nRate (%)": string;
    "Current\nRate (%)": string;
    "Overall\nRate (%)": string;
    [key: string]: string;
  }
  
  // Define type for a product group
  export interface ProductGroup {
    product_group: string;
    pec_table: PECTableRow[];
    harm_table: HarmTableRow[];
    [key: string]: string | any[];
  }
  
  // Define type for selected rows - tracking both table type and row data
  export interface SelectedRow {
    productGroup: string;
    tableType: string;
    rowData: PECTableRow | HarmTableRow;
  }
  
  // Define context state type
  export interface DataContextState {
    data: ProductGroup[];
    selectedRows: SelectedRow[];
    addSelectedRow: (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow) => void;
    removeSelectedRow: (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow) => void;
    isRowSelected: (productGroup: string, tableType: string, rowData: PECTableRow | HarmTableRow) => boolean;
    getSelectedRowsCount: (productGroup: string, tableType: string) => number;
  }