import { ComponentProps } from 'react';

export type LabelVariant = 'info' | 'warning';

export type LabelProps = Omit<ComponentProps<'span'>, 'ref'> & {
  variant?: LabelVariant;
};
