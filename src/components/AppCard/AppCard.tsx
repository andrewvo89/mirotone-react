import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { AppCardProps } from './types';

const AppCard = forwardRef<HTMLDivElement, AppCardProps>((props, ref) => {
  const { accentColor = 'var(--blue700)', className, children, style = {}, ...rest } = props;

  const classNames = ['app-card', className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, '--accent-color': accentColor }}>
      {children}
    </div>
  );
});

AppCard.displayName = 'AppCard';

export default AppCard;
