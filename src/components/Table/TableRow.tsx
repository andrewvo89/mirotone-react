import { forwardRef } from 'react';

import { TableRowProps } from './types';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <tr {...rest} ref={ref} className={className}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
