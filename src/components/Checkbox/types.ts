import { ComponentProps } from 'react';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'children' | 'onChange' | 'value' | 'ref'> & {
  label?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
};
