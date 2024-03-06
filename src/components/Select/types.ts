import { ComponentProps } from 'react';

export type SelectSize = 'small' | 'medium';

export type SelectProps = Omit<ComponentProps<'select'>, 'onChange' | 'value' | 'size' | 'ref'> & {
  value?: string;
  onChange?: (value: string) => void;
  size?: SelectSize;
  isDisabled?: boolean;
};

export type SelectOptionProps = Omit<ComponentProps<'option'>, 'ref'>;

export type SelectLabelProps = Omit<ComponentProps<'label'>, 'ref'>;
