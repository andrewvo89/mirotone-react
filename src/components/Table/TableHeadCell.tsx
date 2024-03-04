import { forwardRef } from 'react';

import { TableHeadCellProps } from './types';

const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <th {...rest} ref={ref} className={className}>
      {children}
    </th>
  );
});

TableHeadCell.displayName = 'TableHeadCell';

export default TableHeadCell;
