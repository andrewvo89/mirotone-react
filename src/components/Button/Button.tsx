import { forwardRef } from 'react';

import { ButtonProps } from './types';
import { getIsLoadingClassName, getSizeClassName, getVariantClassName } from './utils';
import { isString } from '../../utils/common';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'medium',
    variant = 'primary',
    isDisabled = false,
    isLoading = false,
    children,
    className,
    ...rest
  } = props;

  const classNames = [
    className,
    'button',
    getSizeClassName(size),
    getVariantClassName(variant),
    getIsLoadingClassName(isLoading),
  ].filter(isString);

  return (
    <button {...rest} ref={ref} type='button' className={classNames.join(' ')} disabled={isDisabled}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
