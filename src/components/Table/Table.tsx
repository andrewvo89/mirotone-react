import { forwardRef } from 'react';

import { TableProps } from './types';
import { getHeadStickyClassName } from './utils';

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className, children, headIsSticky = true, ...rest } = props;

  const classNames = ['table', getHeadStickyClassName(headIsSticky), className];

  return (
    <table {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </table>
  );
});

Table.displayName = 'Table';

export default Table;
