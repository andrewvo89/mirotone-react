import { forwardRef } from 'react';

import { TableCellProps } from './types';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <td {...rest} ref={ref} className={className}>
      {children}
    </td>
  );
});

TableCell.displayName = 'TableCell';

export default TableCell;
