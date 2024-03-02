import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { AppCardBodyProps } from './types';

const AppCardBody = forwardRef<HTMLDivElement, AppCardBodyProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['app-card--body', className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

AppCardBody.displayName = 'AppCardBody';

export default AppCardBody;
