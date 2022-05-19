import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import AddItemForm from './modules/forms/AddItemForm';
import CircularButton from './modules/common/CircularButton';
import Grid from './modules/grid/components/Grid';
import GridContainer from './modules/grid/components/GridContainer';

import { InventoryItem } from './lib/models';
import { mockInventoryItem } from './__mocks__/data';

const App: React.FC = () => {
  const [rowData, setRowData] = useState<InventoryItem[]>([mockInventoryItem]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const onSubmit = (data: InventoryItem) => {
    // Adjusts date to beginning of current day for comparator
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    setRowData([...rowData, { ...data, date }]);
    setShowAddItemModal(false);
  };

  return (
    <GridContainer>
      <Grid rowData={rowData} />
      <br />
      <div className="d-flex flex-row-reverse">
        <CircularButton onClick={() => setShowAddItemModal(true)}>
          <BsPlusLg />
        </CircularButton>
      </div>
      <AddItemForm onClose={() => setShowAddItemModal(false)} onSubmit={onSubmit} show={showAddItemModal} />
    </GridContainer>
  );
};

export default App;
