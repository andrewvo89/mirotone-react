import { ComponentProps } from 'react';

export type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = Omit<ComponentProps<'div'>, 'ref'>;

export type GridItemsProps = Omit<ComponentProps<'div'>, 'ref'> & {
  colStart: GridColumn;
  colEnd: GridColumn;
};
