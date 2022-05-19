import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import { gridOptions } from '../../../lib/config/grid';

import { useGrid } from '../hooks/useGrid';
import { InventoryItem } from '../../../lib/models';

interface IProps {
  rowData: InventoryItem[];
}

const Grid: React.FC<IProps> = ({ rowData }) => {
  const { api, columnApi, onGridReady } = useGrid();

  return (
    <div className="ag-theme-alpine w-100 vh-75">
      <AgGridReact
        animateRows={true}
        api={api}
        columnApi={columnApi}
        gridOptions={gridOptions}
        onGridReady={onGridReady}
        rowData={rowData}
      />
    </div>
  );
};

export default Grid;
