export interface StaticCounts {
  // Contains average prices of all inventory items
  averagePrices: {
    [key: string]: number;
  };
  // All categories that appear
  categories: string[];
  // Total # items in grid
  itemCount: number;
  // Summed value of all items
  totalValue: number;
  // All vendors
  vendors: string[];
}
