import { InventoryItem } from '../../lib/models';

const date = new Date();
date.setHours(0, 0, 0, 0);

export const mockInventoryItem: InventoryItem = {
  name: 'Test Item',
  quantity: 12,
  parValue: 12345,
  price: 1234567,
  date,
};
