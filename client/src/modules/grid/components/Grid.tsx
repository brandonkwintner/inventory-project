import React from 'react';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { GridOptions } from 'ag-grid-community';

import { useGrid } from '../hooks/useGrid';
import { Item } from '../../../lib/models';

interface IProps {
  gridOptions: GridOptions;
  rowData: Item[];
}

const Grid: React.FC<IProps> = ({ gridOptions, rowData }) => {
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
