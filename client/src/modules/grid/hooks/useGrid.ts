import { useState } from 'react';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

interface GridResponse {
  api?: GridApi;
  columnApi?: ColumnApi;
  onGridReady: (data: GridReadyEvent) => void;
}

/** Configure grid settings and handle updates */
const useGrid = (): GridResponse => {
  const [api, setApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();

  const onGridReady = ({ api, columnApi }: GridReadyEvent) => {
    setApi(api);
    setColumnApi(columnApi);
    columnApi.autoSizeAllColumns();
  };

  return { api, columnApi, onGridReady };
};

export { useGrid };
