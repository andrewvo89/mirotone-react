import { ComponentProps } from 'react';

import { Colors, FontWeight } from '../../tokens/types';
import { typography } from '../../tokens/typoography';

export type TextSize = keyof typeof typography.fontSize;

export type TextProps = ComponentProps<'span'> & {
  size?: TextSize;
  fontWeight?: FontWeight | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
  fontColor?: Colors | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
};
