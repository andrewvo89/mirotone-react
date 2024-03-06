import { ComponentProps } from 'react';

export type TableProps = Omit<ComponentProps<'table'>, 'ref'> & {
  headIsSticky?: boolean;
};

export type TableHeadProps = Omit<ComponentProps<'thead'>, 'ref'>;

export type TableHeadCellProps = Omit<ComponentProps<'th'>, 'ref'>;

export type TableBodyProps = Omit<ComponentProps<'tbody'>, 'ref'>;

export type TableRowProps = Omit<ComponentProps<'tr'>, 'ref'>;

export type TableCellProps = Omit<ComponentProps<'td'>, 'ref'>;
