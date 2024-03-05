import { ComponentProps } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4;

export type HeadingProps = ComponentProps<'h1'> & {
  level?: HeadingLevel;
};
