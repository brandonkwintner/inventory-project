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
    // Makes column equi-sized to fill up whole grid //TODO (update if too many cols)
    api.sizeColumnsToFit();
  };

  return { api, columnApi, onGridReady };
};

export { useGrid };
