import { ComponentProps } from 'react';

import { Colors } from '../../tokens/types';

export type HeadingLevel = 1 | 2 | 3 | 4;

export type HeadingProps = ComponentProps<'h1'> & {
  level?: HeadingLevel;
  fontColor?: Colors | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
};
