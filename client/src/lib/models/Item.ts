import { Category } from './Category';

export interface Item {
  _id: string;
  averagePrice?: number; //! Provided by StaticCounts
  billCost?: number; //! unitPrice * 1.2
  category: Category;
  inventoryValue?: number; //! averagePrice * quantity
  name: string;
  notes?: string;
  quantity: number;
  preferredVendor?: string[];
  reorderLimit?: number;
  unitPrice: number;
  vendorSKU?: string; // stock keeping unit
}
