import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { LabelProps } from './types';

const Label = forwardRef<HTMLSpanElement, LabelProps>((props, ref) => {
  const { className, children, variant = 'info', ...rest } = props;

  const classNames = ['label', `label-${variant}`, className].filter(isNonEmptyString);

  return (
    <span {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </span>
  );
});

Label.displayName = 'Label';

export default Label;
