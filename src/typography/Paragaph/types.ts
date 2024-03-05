import { ComponentProps } from 'react';

export type ParagraphSize = 'small' | 'medium' | 'large';

export type ParagraphProps = ComponentProps<'p'> & {
  size?: ParagraphSize;
};
