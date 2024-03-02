import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { InputGroupTextProps } from './types';

const InputGroup = forwardRef<HTMLDivElement, InputGroupTextProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['input-group', className].filter(isNonEmptyString);

  return (
    <div ref={ref} {...rest} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
