import { ColDef } from 'ag-grid-community';

import { amountTypeFormattor, dateComparator, dateTypeFormattor } from '../../utils';
import { ColumnType } from '../../constants';

interface ColumnTypes {
  [key: string]: ColDef;
}

export const columnTypes: ColumnTypes = {
  [ColumnType.AMOUNT]: {
    filter: 'agNumberColumnFilter',
    valueFormatter: amountTypeFormattor,
  },
  [ColumnType.DATE]: {
    filter: 'agDateColumnFilter',
    filterParams: {
      comparator: dateComparator,
      suppressAndOrCondition: true,
    },
    valueFormatter: dateTypeFormattor,
  },
  [ColumnType.NUMBER]: {
    filter: 'agNumberColumnFilter',
  },
};
