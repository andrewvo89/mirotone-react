import { ComponentProps } from 'react';

import { Colors } from '../../tokens/types';

export type AppCardProps = ComponentProps<'div'> & {
  accentColor?: Colors;
};

export type AppCardTitleProps = ComponentProps<'h1'>;

export type AppCardDescriptionProps = ComponentProps<'h1'>;

export type AppCardBodyProps = ComponentProps<'div'>;

export type AppCardTagsProps = ComponentProps<'div'>;
