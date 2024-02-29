import { forwardRef } from 'react';

import { DividerProps } from './types';

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { className, ...rest } = props;

  return <hr {...rest} ref={ref} className={className} />;
});

Divider.displayName = 'Divider';

export default Divider;
