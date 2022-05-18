import { ColDef } from 'ag-grid-community';

export const columnDefs: ColDef[] = [
  { field: 'name', headerName: 'Item Name' },
  { field: 'quantity', headerName: 'Quantity' },
  { field: 'parValue', headerName: 'Par Value' },
  { field: 'price', headerName: 'Starting Price' },
];

// Applied to all columns
export const defaultColumnDef: ColDef = {
  filter: true,
  sortable: true,
};
