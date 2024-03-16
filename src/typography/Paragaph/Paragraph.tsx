import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { ParagraphProps } from './types';
import styles from './Paragraph.module.css';

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { className, children, size = 'medium', fontWeight, fontColor, style = {}, ...rest } = props;

  const classNames = [`p-${size}`, styles['paragraph'], className].filter(isNonEmptyString);

  let paragraphStyle = { ...style };

  if (fontWeight !== undefined) {
    paragraphStyle = { ...paragraphStyle, '--font-weight': fontWeight };
  }

  if (fontColor !== undefined) {
    paragraphStyle = { ...paragraphStyle, '--font-color': fontColor };
  }

  return (
    <p {...rest} ref={ref} className={classNames.join(' ')} style={paragraphStyle}>
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
