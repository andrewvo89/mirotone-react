import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import styles from './Text.module.css';
import { TextProps } from './types';

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const { className, children, size = 'medium', fontWeight, fontColor, style = {}, ...rest } = props;

  const classNames = [`p-${size}`, styles['text'], className].filter(isNonEmptyString);

  let textStyle = { ...style };

  if (fontWeight !== undefined) {
    textStyle = { ...textStyle, '--font-weight': fontWeight };
  }

  if (fontColor !== undefined) {
    textStyle = { ...textStyle, '--font-color': fontColor };
  }

  return (
    <span {...rest} ref={ref} className={classNames.join(' ')} style={textStyle}>
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export default Text;
