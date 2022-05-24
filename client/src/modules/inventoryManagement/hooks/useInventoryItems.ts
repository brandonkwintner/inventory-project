import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { getInventoryItems, getStaticCounts } from '../../../lib/api';
import { Item, StaticCounts } from '../../../lib/models';
import { Status } from '../../../lib/constants';

interface InventoryItemsResult {
  error: unknown;
  rowData?: Item[];
  setRowData: (data: Item[]) => void;
  staticCounts?: StaticCounts;
  status: Status;
}

const useInventoryItems = (): InventoryItemsResult => {
  const [error, setError] = useState<unknown>();
  const [rowData, setRowData] = useState<Item[]>();
  const [staticCounts, setStaticCounts] = useState<StaticCounts>();

  const { status: inventoryItemsStatus } = useQuery('Inventory Items', getInventoryItems, {
    // Ensures that static counts is defined before firing query
    enabled: !!staticCounts,
    onError: (err) => setError(err),
    onSuccess: (data) => {
      const transformedData = data.map((curr) => {
        const { _id, quantity, unitPrice } = curr;
        const averagePrice = staticCounts?.averagePrices[_id] ?? 0;
        return {
          ...curr,
          averagePrice,
          billCost: unitPrice * 1.2,
          inventoryValue: averagePrice * quantity,
        };
      });
      setRowData(transformedData);
    },
  });

  const { status: staticCountsStatus } = useQuery('Static Counts', getStaticCounts, {
    onError: (err) => setError(err),
    onSuccess: (data) => setStaticCounts(data),
  });

  // Determines view state
  const status: Status = useMemo(() => {
    if (inventoryItemsStatus === Status.SUCCESS && staticCountsStatus === Status.SUCCESS) return Status.SUCCESS;
    if (inventoryItemsStatus === Status.ERROR || staticCountsStatus === Status.ERROR) return Status.ERROR;
    return Status.LOADING;
  }, [inventoryItemsStatus, staticCountsStatus]);

  return { error, rowData, setRowData, staticCounts, status };
};

export { useInventoryItems };
