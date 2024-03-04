import { forwardRef } from 'react';

import { TableHeadProps } from './types';

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <thead {...rest} ref={ref} className={className}>
      {children}
    </thead>
  );
});

TableHead.displayName = 'TableHead';

export default TableHead;
