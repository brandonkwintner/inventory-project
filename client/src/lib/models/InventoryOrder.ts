export interface InventoryOrder {
  dateOrdered: Date;
  fulfilled: boolean;
  item: string;
  notes?: string;
  quantity: number;
  unitPrice: number;
}
