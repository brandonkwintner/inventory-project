import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import InventoryManagementTab from './modules/inventoryManagement/components/InventoryManagementTab';

const App: React.FC = () => {
  const [tab, setTab] = useState('inventory');

  return (
    <Container className="p-3">
      <Tabs
        className="mb-3"
        activeKey={tab}
        onSelect={(key) => {
          if (key) setTab(key);
        }}
      >
        <Tab eventKey="inventory" title="Inventory Management">
          <InventoryManagementTab />
        </Tab>
        <Tab eventKey="orders" title="Orders" />
        <Tab eventKey="requests" title="Supply Requests" />
      </Tabs>
    </Container>
  );
};

export default App;
