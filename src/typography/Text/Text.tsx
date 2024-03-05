import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TextProps } from './types';

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const { className, children, size = 'medium', ...rest } = props;

  const classNames = [`p-${size}`, className].filter(isNonEmptyString);

  return (
    <span {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export default Text;
