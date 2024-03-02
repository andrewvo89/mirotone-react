import { ComponentProps } from 'react';

export type FormGroupSize = 'small' | 'medium';

export type FormGroupStatus = 'error' | 'success';

export type FormGroupProps = ComponentProps<'div'> & {
  size?: FormGroupSize;
  isDisabled?: boolean;
  status?: FormGroupStatus;
};
