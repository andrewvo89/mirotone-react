import { forwardRef } from 'react';

import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';

import { isNonEmptyString } from '../../utils/common';
import styles from './DropdownMenu.module.css';
import { DropdownMenuProps } from './types';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>((props, ref) => {
  const { size = 'medium', trigger, onOpenChange, children, className, ...rest } = props;

  const classNames = [styles['content'], `p-${size}`, className].filter(isNonEmptyString);

  return (
    <Root onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content className={classNames.join(' ')} {...rest} ref={ref}>
          {children}
        </Content>
      </Portal>
    </Root>
  );
});

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
