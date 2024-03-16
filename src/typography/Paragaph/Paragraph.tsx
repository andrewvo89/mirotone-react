import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { ParagraphProps } from './types';
import styles from './Paragraph.module.css';

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const {
    className,
    children,
    size = 'medium',
    fontWeight = 'inherit',
    fontColor = 'inherit',
    style = {},
    ...rest
  } = props;

  const classNames = [`p-${size}`, styles['paragraph'], className].filter(isNonEmptyString);

  return (
    <p
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{ ...style, '--font-weight': fontWeight, '--font-color': fontColor }}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
