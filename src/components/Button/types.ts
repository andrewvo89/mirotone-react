import { DetailedHTMLProps, InputHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ButtonProps = DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  PropsWithChildren<{
    size?: ButtonSize;
    variant?: ButtonVariant;
    isDisabled?: boolean;
    isLoading?: boolean;
  }>;
