import { ColDef } from 'ag-grid-community';

import { amountTypeFormattor, dateComparator, dateTypeFormattor } from '../../utils';
import { ColumnType, LIGHT_LIME_GREEN } from '../../constants';

interface ColumnTypes {
  [key: string]: ColDef;
}

export const columnTypes: ColumnTypes = {
  [ColumnType.AMOUNT]: {
    cellStyle: {
      textAlign: 'right',
    },
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
  [ColumnType.GREEN_BACKGROUND]: {
    cellStyle: {
      background: LIGHT_LIME_GREEN,
      fontWeight: 700,
    },
  },
  [ColumnType.NUMBER]: {
    cellStyle: {
      textAlign: 'center',
    },
    filter: 'agNumberColumnFilter',
  },
};
