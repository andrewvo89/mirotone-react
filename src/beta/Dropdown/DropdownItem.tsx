import { forwardRef } from 'react';

import { Item } from '@radix-ui/react-dropdown-menu';

import { isNonEmptyString } from '../../utils/common';
import styles from './DropdownItem.module.css';
import { DropdownItemProps } from './types';

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
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

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
