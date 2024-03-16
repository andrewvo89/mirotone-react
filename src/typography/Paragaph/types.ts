import { ComponentProps } from 'react';
import { Colors, FontWeight } from '../../tokens/types';

export type ParagraphSize = 'small' | 'medium' | 'large';

export type ParagraphProps = ComponentProps<'p'> & {
  size?: ParagraphSize;
  fontWeight?: FontWeight;
  fontColor?: Colors;
};
