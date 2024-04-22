import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { ParagraphProps } from './types';
import styles from './Paragraph.module.css';
import { tokens } from '../../tokens';

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { className, children, size = 'medium', fontWeight, fontColor, style = {}, ...rest } = props;

  const classNames = [styles['paragraph'], className].filter(isNonEmptyString);

  let paragraphStyle = { ...style };

  paragraphStyle = { ...paragraphStyle, '--font-size': tokens.typography.fontSize[size] };

  if (fontWeight !== undefined) {
    paragraphStyle = { ...paragraphStyle, '--font-weight': fontWeight };
  }

  if (fontColor !== undefined) {
    paragraphStyle = { ...paragraphStyle, '--font-color': fontColor };
  }

  console.log('paragraphStyle', paragraphStyle);

  return (
    <p {...rest} ref={ref} className={classNames.join(' ')} style={paragraphStyle}>
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
