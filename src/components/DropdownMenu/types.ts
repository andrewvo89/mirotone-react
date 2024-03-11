import { ComponentProps, ReactNode } from 'react';

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
  DropdownMenuProps as RadixDropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';

export type DropdownContentSize = 'small' | 'medium' | 'large';

export type DropdownMenuProps = Omit<ComponentProps<'div'>, 'ref'> & {
  size?: DropdownContentSize;
  side?: RadixDropdownMenuContentProps['side'];
  onOpenChange?: RadixDropdownMenuProps['onOpenChange'];
  trigger: ReactNode;
};

export type DropdownMenuItemProps = Omit<ComponentProps<'div'>, 'ref' | 'onSelect'> & {
  disableCloseOnSelect?: boolean;
  onSelect?: () => void;
};

export type DropdownMenuDividerProps = Omit<ComponentProps<'hr'>, 'children' | 'ref'>;