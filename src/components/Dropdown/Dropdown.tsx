import { forwardRef } from 'react';

import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';

import { isNonEmptyString } from '../../utils/common';
import styles from './Dropdown.module.css';
import { DropdownProps } from './types';

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { size = 'medium', trigger, open, onOpenChange, children, className, ...rest } = props;

  const classNames = [styles['panel'], `p-${size}`, className].filter(isNonEmptyString);

  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content className={classNames.join(' ')} {...rest} ref={ref}>
          {children}
        </Content>
      </Portal>
    </Root>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
