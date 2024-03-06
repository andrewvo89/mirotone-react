import { ComponentProps } from 'react';

import { Colors } from '../../tokens/types';

export type AppCardProps = Omit<ComponentProps<'div'>, 'ref'> & {
  accentColor?: Colors;
};

export type AppCardTitleProps = Omit<ComponentProps<'h1'>, 'ref'>;

export type AppCardDescriptionProps = Omit<ComponentProps<'h1'>, 'ref'>;

export type AppCardBodyProps = Omit<ComponentProps<'div'>, 'ref'>;

export type AppCardTagsProps = Omit<ComponentProps<'div'>, 'ref'>;
