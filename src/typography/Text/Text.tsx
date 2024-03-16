import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import styles from './Text.module.css';
import { TextProps } from './types';

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    className,
    children,
    size = 'medium',
    fontWeight = 'var(--font-weight-normal)',
    fontColor = 'var(--primary-text-color)',
    style = {},
    ...rest
  } = props;

  const classNames = [`p-${size}`, styles['text'], className].filter(isNonEmptyString);

  return (
    <span
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{ ...style, '--font-weight': fontWeight, '--font-color': fontColor }}
    >
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export default Text;
