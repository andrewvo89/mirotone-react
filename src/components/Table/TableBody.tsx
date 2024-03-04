import { forwardRef } from 'react';

import { TableBodyProps } from './types';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <tbody {...rest} ref={ref} className={className}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';

export default TableBody;
