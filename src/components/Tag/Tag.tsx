import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TagProps } from './types';
import { getIconClassName } from './utils';

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const { icon, textColor = 'var(--black)', backgroundColor = 'var(--indigo50)', className, children, ...rest } = props;

  const classNames = ['tag', getIconClassName(icon), className].filter(isNonEmptyString);

  return (
    <span
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{ '--color': textColor, '--background': backgroundColor }}
    >
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';

export default Tag;
