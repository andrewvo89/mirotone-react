import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { ParagraphProps } from './types';

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { className, children, size = 'medium', ...rest } = props;

  const classNames = [`p-${size}`, className].filter(isNonEmptyString);

  return (
    <p {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
