import { ComponentProps } from 'react';

export type LabelVariant = 'info' | 'warning';

export type LabelProps = ComponentProps<'span'> & {
  variant?: LabelVariant;
};
