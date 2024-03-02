import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { AppCardDescriptionProps } from './types';

const AppCardDescription = forwardRef<HTMLHeadingElement, AppCardDescriptionProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['app-card--description', 'p-medium', className].filter(isNonEmptyString);

  return (
    <h1 {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </h1>
  );
});

AppCardDescription.displayName = 'AppCardDescription';

export default AppCardDescription;
