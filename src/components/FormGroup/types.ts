import { ComponentProps } from 'react';

export type FormGroupSize = 'small' | 'medium';

export type FormGroupStatus = 'error' | 'success';

export type FormGroupProps = Omit<ComponentProps<'div'>, 'ref'> & {
  size?: FormGroupSize;
  isDisabled?: boolean;
  status?: FormGroupStatus;
};
