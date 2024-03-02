import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { InputStatusTextProps } from './types';

const InputStatusText = forwardRef<HTMLDivElement, InputStatusTextProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['status-text', className].filter(isNonEmptyString);

  return (
    <div ref={ref} {...rest} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

InputStatusText.displayName = 'InputStatusText';

export default InputStatusText;
