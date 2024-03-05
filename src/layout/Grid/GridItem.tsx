import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { GridItemsProps } from './types';

const GridItem = forwardRef<HTMLDivElement, GridItemsProps>((props, ref) => {
  const { className, children, colStart, colEnd, ...rest } = props;

  const classNames = [`cs${colStart}`, `ce${colEnd}`, className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

GridItem.displayName = 'GridItem';

export default GridItem;
