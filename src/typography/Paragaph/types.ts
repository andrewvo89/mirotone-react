import { ComponentProps } from 'react';

import { Colors, FontWeight } from '../../tokens/types';
import { typography } from '../../tokens/typoography';

export type ParagraphSize = keyof typeof typography.fontSize;

export type ParagraphProps = ComponentProps<'p'> & {
  size?: ParagraphSize;
  fontWeight?: FontWeight;
  fontColor?: Colors;
};
