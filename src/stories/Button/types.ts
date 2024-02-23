import { PropsWithChildren } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ButtonProps = PropsWithChildren<{
  size?: ButtonSize;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
}>;
