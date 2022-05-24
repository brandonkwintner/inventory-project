import { ColDef } from 'ag-grid-community';

import { ColumnType } from '../../constants';

// List of columns and their properties
export const columnDefs: ColDef[] = [
  { field: 'name', headerName: 'Item Name' },
  { field: 'category', rowGroup: true, hide: true },
  { field: 'quantity', headerName: 'Available Inventory', type: [ColumnType.GREEN_BACKGROUND, ColumnType.NUMBER] },
  { field: 'reorderLimit', headerName: 'Reorder Limit', type: ColumnType.NUMBER },
  { field: 'unitPrice', headerName: 'Unit Price', type: ColumnType.AMOUNT },
  { field: 'averagePrice', headerName: 'Average Unit Price', type: ColumnType.AMOUNT },
  { field: 'billCost', headerName: 'Bill Cost', type: ColumnType.AMOUNT },
  { field: 'inventoryValue', headerName: 'Inventory Value', type: ColumnType.AMOUNT },
  { field: 'preferredVendor', headerName: 'Preferred Vendor' },
  { field: 'vendorSKU', headerName: 'Vendor SKU' },
  { field: 'notes', headerName: 'Notes' },
];

// Applied to all columns
export const defaultColDef: ColDef = {
  filter: 'agTextColumnFilter',
  filterParams: {
    buttons: ['apply', 'reset'],
    closeOnApply: true,
  },
  resizable: true,
  sortable: true,
};
