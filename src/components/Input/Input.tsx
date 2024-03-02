import { ChangeEventHandler, forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { InputProps } from './types';
import { getFlexModifierClassName, getSizeClassName } from './utils';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
    size = 'medium',
    isDisabled = false,
    isReadOnly = false,
    flexModifier = '4/4',
    className,
    ...rest
  } = props;

  const classNames = ['input', className, getSizeClassName(size), getFlexModifierClassName(flexModifier)].filter(
    isNonEmptyString,
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => onChange?.(event.target.value);

  return (
    <input
      ref={ref}
      {...rest}
      className={classNames.join(' ')}
      value={value}
      onChange={onChangeHandler}
      disabled={isDisabled}
      readOnly={isReadOnly}
    />
  );
});

Input.displayName = 'Input';

export default Input;
