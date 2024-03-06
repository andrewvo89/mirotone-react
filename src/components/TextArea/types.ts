import { ComponentProps } from 'react';

export type TextAreaSize = 'small' | 'medium';

export type TextAreaProps = Omit<ComponentProps<'textarea'>, 'value' | 'onChange' | 'children' | 'size' | 'ref'> & {
  size?: TextAreaSize;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};
