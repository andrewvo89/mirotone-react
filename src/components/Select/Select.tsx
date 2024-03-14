import { ChangeEventHandler, forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { SelectProps } from './types';
import { getSizeClassName } from './utils';

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { value, onChange, size = 'medium', isDisabled = false, className, ...rest } = props;

  const classNames = ['select', getSizeClassName(size), className].filter(isNonEmptyString);

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => onChange?.(event.target.value);

  return (
    <select
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      value={value}
      onChange={onChangeHandler}
      disabled={isDisabled}
    >
      {props.children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
