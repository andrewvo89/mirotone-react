import { ComponentProps } from 'react';

export type TextSize = 'small' | 'medium' | 'large';

export type TextProps = ComponentProps<'span'> & {
  size?: TextSize;
};
