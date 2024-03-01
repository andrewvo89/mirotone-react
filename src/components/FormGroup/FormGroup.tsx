import { forwardRef } from 'react';

import { isString } from '../../utils/common';
import { FormGroupProps } from './types';
import { getSizeClassName } from './utils';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { size = 'medium', className, children, ...rest } = props;

  const classNames = [getSizeClassName(size), className].filter(isString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
