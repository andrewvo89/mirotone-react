import { ComponentProps } from 'react';

import { Colors, FontWeight } from '../../tokens/types';

export type TextSize = 'small' | 'medium' | 'large';

export type TextProps = ComponentProps<'span'> & {
  size?: TextSize;
  fontWeight?: FontWeight;
  fontColor?: Colors;
};
