import { forwardRef } from 'react';

import { ButtonProps } from './types';
import { getIsLoadingClassName, getSizeClassName, getVariantClassName } from './utils';
import { isNonEmptyString } from '../../utils/common';

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
    'button',
    getSizeClassName(size),
    getVariantClassName(variant),
    getIsLoadingClassName(isLoading),
    className,
  ].filter(isNonEmptyString);

  return (
    <button {...rest} ref={ref} className={classNames.join(' ')} disabled={isDisabled}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
