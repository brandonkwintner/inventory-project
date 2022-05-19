export const dateComparator = (filterDate: Date, cellValue: Date): number => {
  if (cellValue.valueOf() < filterDate.valueOf()) return -1;
  if (cellValue.valueOf() > filterDate.valueOf()) return 1;
  return 0;
};
