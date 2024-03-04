import { ComponentProps } from 'react';

export type TableProps = ComponentProps<'table'> & {
  headIsSticky?: boolean;
};

export type TableHeadProps = ComponentProps<'thead'>;

export type TableHeadCellProps = ComponentProps<'th'>;

export type TableBodyProps = ComponentProps<'tbody'>;

export type TableRowProps = ComponentProps<'tr'>;

export type TableCellProps = ComponentProps<'td'>;
