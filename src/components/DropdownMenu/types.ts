import { ComponentProps, ReactNode } from 'react';

export type DropdownContentSize = 'small' | 'medium' | 'large';

export type DropdownMenuProps = Omit<ComponentProps<'div'>, 'ref'> & {
  size?: DropdownContentSize;
  trigger: ReactNode;
};

export type DropdownMenuItemProps = Omit<ComponentProps<'div'>, 'ref'> & {
  disableCloseOnSelect?: boolean;
  onSelect?: () => void;
};

export type DropdownMenuDividerProps = Omit<ComponentProps<'hr'>, 'children' | 'ref'>;
