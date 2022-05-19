import { ColDef } from 'ag-grid-community';

import { ColumnType } from '../../constants';

// List of columns and their properties
export const columnDefs: ColDef[] = [
  { field: 'name', headerName: 'Item Name' },
  { field: 'quantity', headerName: 'Quantity', type: ColumnType.NUMBER },
  { field: 'parValue', headerName: 'Par Value', type: ColumnType.AMOUNT },
  { field: 'price', headerName: 'Starting Price', type: ColumnType.AMOUNT },
  { field: 'date', headerName: 'Date Added', type: ColumnType.DATE },
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
