import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import AddItemForm from '../../forms/AddItemForm';
import CircularButton from '../../common/components/CircularButton';
import Grid from '../../grid/components/Grid';
import TopBar from '../../topBar/TopBar';

import { gridOptions } from '../../../lib/config/inventory';
import { InventoryItem } from '../../../lib/models';
import { useInventoryItems } from '../hooks/useInventoryItems';
import { UseViewState } from '../../common/hooks/UseViewState';

const InventoryManagementTab: React.FC = () => {
  const { error, rowData, setRowData, staticCounts, status } = useInventoryItems();
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const onSubmit = (data: InventoryItem) => {
    if (!rowData) return;
    // Adjusts date to beginning of current day for comparator
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    //setRowData([...rowData, { ...data, date }]);
    setShowAddItemModal(false);
  };

  return (
    <UseViewState error={error} status={status}>
      {rowData && staticCounts && (
        <>
          <TopBar staticCounts={staticCounts} />
          <Grid gridOptions={gridOptions} rowData={rowData} />
          <br />
          <div className="d-flex flex-row-reverse">
            <CircularButton onClick={() => setShowAddItemModal(true)}>
              <BsPlusLg />
            </CircularButton>
          </div>
          <AddItemForm onClose={() => setShowAddItemModal(false)} onSubmit={onSubmit} show={showAddItemModal} />
        </>
      )}
    </UseViewState>
  );
};

export default InventoryManagementTab;
