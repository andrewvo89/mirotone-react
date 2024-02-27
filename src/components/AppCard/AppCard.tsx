import { forwardRef } from 'react';

import { isString } from '../../utils/common';
import { AppCardProps } from './types';
import { getAppCardAttributes } from './utils';

const AppCard = forwardRef<HTMLDivElement, AppCardProps>((props, ref) => {
  const { accentColor = 'var(--blue700)', className, children, ...rest } = props;

  const classNames = ['app-card', className].filter(isString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')} {...getAppCardAttributes(accentColor)}>
      {children}
    </div>
  );
});

AppCard.displayName = 'AppCard';

export default AppCard;
