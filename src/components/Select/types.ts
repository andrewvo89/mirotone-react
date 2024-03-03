import { ComponentProps } from 'react';

export type SelectSize = 'small' | 'medium';

export type SelectProps = Omit<ComponentProps<'select'>, 'onChange' | 'value' | 'size'> & {
  value?: string;
  onChange?: (value: string) => void;
  size?: SelectSize;
  isDisabled?: boolean;
};

export type SelectOptionProps = ComponentProps<'option'>;

export type SelectLabelProps = ComponentProps<'label'>;
