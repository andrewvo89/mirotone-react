import { forwardRef } from 'react';

import { Item } from '@radix-ui/react-dropdown-menu';

import { isNonEmptyString } from '../../utils/common';
import styles from './DropdownMenuItem.module.css';
import { DropdownMenuItemProps } from './types';

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>((props, ref) => {
  const { className, disableCloseOnSelect = false, onSelect, ...rest } = props;

  const classNames = [styles['menu-item'], className].filter(isNonEmptyString);

  const onSelectHandler = (event: Event) => {
    if (disableCloseOnSelect) {
      event.preventDefault();
    }
    onSelect?.();
  };

  return <Item className={classNames.join(' ')} {...rest} ref={ref} onSelect={onSelectHandler} />;
});

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
