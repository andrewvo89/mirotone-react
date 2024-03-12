import { forwardRef } from 'react';

import { DropdownDividerProps } from './types';
import { isNonEmptyString } from '../../utils/common';
import styles from './DropdownDivider.module.css';

const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>((props, ref) => {
  const { className, ...rest } = props;

  const classNames = [styles['divider'], className].filter(isNonEmptyString);

  return <hr {...rest} ref={ref} className={classNames.join(' ')} />;
});

DropdownDivider.displayName = 'DropdownDivider';

export default DropdownDivider;
