import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import AddItemForm from './modules/forms/AddItemForm';
import Grid from './modules/grid/components/Grid';

import { InventoryItem } from './lib/models';

const App: React.FC = () => {
  const [rowData, setRowData] = useState<InventoryItem[]>([]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const onSubmit = (data: InventoryItem) => {
    setRowData([...rowData, data]);
    setShowAddItemModal(false);
  };

  return (
    <div>
      <Grid rowData={rowData} />
      <Button onClick={() => setShowAddItemModal(true)}>Show Add Item</Button>
      <AddItemForm onClose={() => setShowAddItemModal(false)} onSubmit={onSubmit} show={showAddItemModal} />
    </div>
  );
};

export default App;
