import { forwardRef } from 'react';

import { isString } from '../../utils/common';
import { LinkTagProps } from './types';
import { getIconClassName } from './utils';

const LinkTag = forwardRef<HTMLAnchorElement, LinkTagProps>((props, ref) => {
  const { icon, textColor = 'var(--black)', backgroundColor = 'var(--indigo50)', className, children, ...rest } = props;

  const classNames = ['tag', getIconClassName(icon), className].filter(isString);

  return (
    <a
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{ '--color': textColor, '--background': backgroundColor }}
    >
      {children}
    </a>
  );
});

LinkTag.displayName = 'LinkTag';

export default LinkTag;
