import { ComponentProps } from 'react';

export type InputSize = 'small' | 'medium';

export type FlexModifier = '1/4' | '2/4' | '3/4' | '4/4';

export type InputProps = Omit<ComponentProps<'input'>, 'value' | 'onChange' | 'children' | 'size'> & {
  size?: InputSize;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  flexModifier?: FlexModifier;
};

export type InputLabelProps = ComponentProps<'label'>;

export type InputDecorationProps = ComponentProps<'span'> & {
  borderLeft?: boolean;
  borderRight?: boolean;
  flexModifier?: FlexModifier;
};

export type InputStatusTextProps = ComponentProps<'div'>;

export type InputGroupTextProps = ComponentProps<'div'>;
