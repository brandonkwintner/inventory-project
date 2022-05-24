import _axios from '../config/common/axios';
import { Item, Order, StaticCounts } from '../models';
import * as Routes from '../routes';

export const getInventoryItems = async () => {
  const { data } = await _axios.get<Item[]>(Routes.INVENTORY_ITEMS_URL);
  return data;
};

export const getInventoryOrders = async () => {
  const { data } = await _axios.get<Order[]>(Routes.INVENTORY_ORDERS_URL);
  return data;
};

export const getStaticCounts = async () => {
  const { data } = await _axios.get<StaticCounts>(Routes.STATIC_COUNTS_URL);
  return data;
};
