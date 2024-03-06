import { ComponentProps } from 'react';
import { Icons } from '..';
import { Colors } from '../../tokens/types';

export type BaseTagProps = {
  icon?: Icons;
  textColor?: Colors;
  backgroundColor?: Colors;
};

export type TagProps = Omit<ComponentProps<'span'>, 'ref'> & BaseTagProps;

export type LinkTagProps = Omit<ComponentProps<'a'>, 'ref'> & BaseTagProps;

export type TagButtonProps = Omit<ComponentProps<'button'>, 'children' | 'ref'> & {
  icon: Icons;
};
