import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { CenteredProps } from './types';

const Centered = forwardRef<HTMLDivElement, CenteredProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['centered', className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

Centered.displayName = 'Centered';

export default Centered;
