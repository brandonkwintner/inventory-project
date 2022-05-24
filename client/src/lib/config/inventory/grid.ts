import { GridOptions } from 'ag-grid-community';

import { columnDefs, defaultColDef } from './columnDefs';
import { columnTypes } from './columnTypes';

export const gridOptions: GridOptions = {
  columnDefs,
  columnTypes,
  defaultColDef,
  // Groups columns (in our case by category)
  groupDefaultExpanded: 1,
  groupDisplayType: 'groupRows',
};
