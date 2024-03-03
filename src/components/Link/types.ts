import { ComponentProps } from 'react';

export type LinkVariant = 'primary' | 'danger' | 'text';

export type LinkProps = ComponentProps<'a'> & {
  variant?: LinkVariant;
};
