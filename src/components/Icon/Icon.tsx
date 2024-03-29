import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import styles from './Icon.module.css';
import { IconProps } from './types';

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { size = 'medium', name, className, ...rest } = props;

  const classNames = ['icon', `icon-${name}`, styles[size], className].filter(isNonEmptyString);

  return <span {...rest} ref={ref} className={classNames.join(' ')} />;
});

Icon.displayName = 'Icon';

export default Icon;
