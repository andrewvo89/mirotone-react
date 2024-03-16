import { ComponentProps } from 'react';

import { Colors, FontWeight } from '../../tokens/types';

export type ParagraphSize = 'small' | 'medium' | 'large';

export type ParagraphProps = ComponentProps<'p'> & {
  size?: ParagraphSize;
  fontWeight?: FontWeight | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
  fontColor?: Colors | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
};
