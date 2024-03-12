import { forwardRef } from 'react';

import { DropdownMenuDividerProps } from './types';
import { isNonEmptyString } from '../../utils/common';
import styles from './DropdownMenuDivider.module.css';

const DropdownMenuDivider = forwardRef<HTMLHRElement, DropdownMenuDividerProps>((props, ref) => {
  const { className, ...rest } = props;

  const classNames = [styles['divider'], className].filter(isNonEmptyString);

  return <hr {...rest} ref={ref} className={classNames.join(' ')} />;
});

DropdownMenuDivider.displayName = 'DropdownMenuDivider';

export default DropdownMenuDivider;
