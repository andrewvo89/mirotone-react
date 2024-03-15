import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import styles from './Button.module.css';
import { ButtonProps } from './types';
import { getGapClassName, getIsLoadingClassName, getSizeClassName, getVariantClassName } from './utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'medium',
    variant = 'primary',
    isDisabled = false,
    isLoading = false,
    gap,
    children,
    className,
    style = {},
    ...rest
  } = props;

  const classNames = [
    'button',
    styles['button'],
    getSizeClassName(size),
    getVariantClassName(variant),
    getIsLoadingClassName(isLoading),
    getGapClassName(gap),
    className,
  ].filter(isNonEmptyString);

  let buttonStyles = { ...style };

  if (gap) {
    buttonStyles = { ...buttonStyles, '--gap': gap };
  }

  return (
    <button {...rest} ref={ref} className={classNames.join(' ')} disabled={isDisabled} style={buttonStyles}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
