import { ComponentProps } from 'react';

export type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = ComponentProps<'div'>;

export type GridItemsProps = ComponentProps<'div'> & {
  colStart: GridColumn;
  colEnd: GridColumn;
};
