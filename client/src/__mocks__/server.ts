import { createServer, Response } from 'miragejs';

import * as Routes from '../lib/routes';
import * as Mocks from './data';

export const makeServer = ({ environment = 'development' }) =>
  createServer({
    environment,
    routes() {
      this.get(Routes.INVENTORY_ITEMS_URL, () => new Response(200, undefined, Mocks.mockInventoryItems));
      this.get(Routes.INVENTORY_ORDERS_URL, () => new Response(200, undefined, Mocks.mockInventoryOrders));
      this.get(Routes.STATIC_COUNTS_URL, () => new Response(200, undefined, Mocks.mockStaticCounts));
    },
  });
