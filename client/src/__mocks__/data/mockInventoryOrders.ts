import { Order } from '../../lib/models';

export const mockInventoryOrders: Order[] = [
  {
    item: 'Napkins',
    dateOrdered: new Date(5 / 21 / 22),
    fulfilled: true,
    quantity: 13,
    unitPrice: 1.23,
    notes: 'Test Item',
  },
  {
    item: 'Plates',
    dateOrdered: new Date(),
    fulfilled: false,
    quantity: 21,
    unitPrice: 3.2,
  },
];
