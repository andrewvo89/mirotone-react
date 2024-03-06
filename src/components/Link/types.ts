import { ComponentProps } from 'react';

export type LinkVariant = 'primary' | 'danger' | 'text';

export type LinkProps = Omit<ComponentProps<'a'>, 'ref'> & {
  variant?: LinkVariant;
};
