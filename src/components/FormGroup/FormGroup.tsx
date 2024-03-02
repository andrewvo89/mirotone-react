import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { FormGroupProps } from './types';
import { getIsDisabledClassName, getSizeClassName } from './utils';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { size = 'medium', status, isDisabled, className, children, ...rest } = props;

  const classNames = [getSizeClassName(size), getIsDisabledClassName(isDisabled), status, className].filter(
    isNonEmptyString,
  );

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
