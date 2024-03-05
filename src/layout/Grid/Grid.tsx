import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { GridProps } from './types';

const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['grid', className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
