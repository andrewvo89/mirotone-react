import { ComponentProps } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ButtonProps = Omit<ComponentProps<'button'>, 'ref'> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
};
