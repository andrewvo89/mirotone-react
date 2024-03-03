import { forwardRef } from 'react';

import { SelectLabelProps } from './types';

const SelecLabel = forwardRef<HTMLLabelElement, SelectLabelProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <label {...rest} ref={ref} className={className}>
      {children}
    </label>
  );
});

SelecLabel.displayName = 'SelecLabel';

export default SelecLabel;
