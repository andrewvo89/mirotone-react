import { ComponentProps } from 'react';
import { Colors } from '../../tokens/types';

export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = Omit<ComponentProps<'span'>, 'ref'> & {
  size?: SpinnerSize;
  spinnerColor?: Colors;
};
