import { ComponentProps } from 'react';

export type FormGroupSize = 'small' | 'medium';

export type FormGroupProps = ComponentProps<'div'> & {
  size?: FormGroupSize;
};
