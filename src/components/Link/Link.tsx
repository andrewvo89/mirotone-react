import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { LinkProps } from './types';

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, children, variant = 'info', ...rest } = props;

  const classNames = ['link', `link-${variant}`, className].filter(isNonEmptyString);

  return (
    <span {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </span>
  );
});

Link.displayName = 'Link';

export default Link;
