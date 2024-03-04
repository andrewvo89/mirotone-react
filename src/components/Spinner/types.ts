import { ComponentProps } from 'react';
import { Colors } from '../../tokens/types';

export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = ComponentProps<'span'> & {
  size?: SpinnerSize;
  spinnerColor?: Colors;
};
