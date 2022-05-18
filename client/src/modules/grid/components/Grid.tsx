import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { columnDefs, defaultColumnDef } from '../../../lib/config/grid';

import { useGrid } from '../hooks/useGrid';
import { InventoryItem } from '../../../lib/models';

interface IProps {
  rowData: InventoryItem[];
}

const Grid: React.FC<IProps> = ({ rowData }) => {
  const { api, columnApi, onGridReady } = useGrid();

  return (
    <div className="ag-theme-alpine vw-100 vh-75">
      <AgGridReact
        animateRows={true}
        api={api}
        columnApi={columnApi}
        columnDefs={useMemo(() => columnDefs, [])}
        defaultColDef={useMemo(() => defaultColumnDef, [])}
        onGridReady={onGridReady}
        rowData={rowData}
      />
    </div>
  );
};

export default Grid;
