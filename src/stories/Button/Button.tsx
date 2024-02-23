import 'mirotone/dist/styles.css';

import { forwardRef } from 'react';

import { ButtonProps } from './types';
import { getIsLoadingClassName, getSizeClassName, getVariantClassName } from './utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size = 'medium', variant = 'primary', isDisabled = false, isLoading = false, children } = props;

  const classNames = [
    'button',
    getSizeClassName(size),
    getVariantClassName(variant),
    getIsLoadingClassName(isLoading),
  ].filter(Boolean);

  return (
    <button ref={ref} type='button' className={classNames.join(' ')} disabled={isDisabled}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
