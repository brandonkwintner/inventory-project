/** Used for invidual location supply orders, orders to be billed, and supply requests */
export interface SupplyOrder {
  billed?: boolean;
  dateFulfilled: Date;
  dateInitiated?: Date;
  location: string;
  requestedBy: string;
  resources: {
    name: string;
    quantity: number;
    fulfilled?: number;
    total?: number;
  }[];
  total?: number;
  trackingNumber?: number;
}
