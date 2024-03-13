import { ComponentProps } from 'react';

export type DismissableBadgeVariant = 'primary' | 'secondary';

export type DismissableBadgeProps = Omit<ComponentProps<'div'>, 'ref'> & {
  rounded?: boolean;
  variant?: DismissableBadgeVariant;
  onClose?: () => void;
};
