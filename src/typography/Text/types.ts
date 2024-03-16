import { ComponentProps } from 'react';

import { Colors, FontWeight } from '../../tokens/types';

export type TextSize = 'small' | 'medium' | 'large';

export type TextProps = ComponentProps<'span'> & {
  size?: TextSize;
  fontWeight?: FontWeight | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
  fontColor?: Colors | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
};
