import React from 'react';

import { StaticCounts } from '../../lib/models';
import { amountTypeFormattor } from '../../lib/utils';

interface IProps {
  staticCounts: StaticCounts;
}

const TopBar: React.FC<IProps> = ({ staticCounts: { itemCount, totalValue } }) => {
  const formattedTotalValue = amountTypeFormattor({ value: totalValue });
  return (
    <div className="d-flex flex-row my-2 py-2 border bg-light">
      <div className="px-3 border-end border-dark">
        <strong>Total Inventory</strong>: {itemCount}
      </div>
      <div className="px-3">
        <strong>Inventory Value</strong>: {formattedTotalValue}
      </div>
    </div>
  );
};

export default TopBar;
