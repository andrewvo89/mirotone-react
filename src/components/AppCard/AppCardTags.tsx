import { forwardRef } from 'react';

import { isString } from '../../utils/common';
import { AppCardTagsProps } from './types';
import styles from './AppCardTags.module.css';

const AppCardTags = forwardRef<HTMLDivElement, AppCardTagsProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNames = ['app-card--tags', styles['tags'], className].filter(isString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
});

AppCardTags.displayName = 'AppCardTags';

export default AppCardTags;
