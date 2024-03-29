import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { AppCardTitleProps } from './types';

const AppCardTitle = forwardRef<HTMLHeadingElement, AppCardTitleProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['app-card--title', className].filter(isNonEmptyString);

  return (
    <h1 {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </h1>
  );
});

AppCardTitle.displayName = 'AppCardTitle';

export default AppCardTitle;
