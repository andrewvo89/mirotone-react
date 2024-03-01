import { forwardRef } from 'react';

import { InputLabelProps } from './types';

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <label {...rest} ref={ref} className={className}>
      {children}
    </label>
  );
});

InputLabel.displayName = 'InputLabel';

export default InputLabel;
