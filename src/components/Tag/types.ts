import { ComponentProps } from 'react';
import { Icons } from '..';
import { Colors } from '../../tokens/types';

export type BaseTagProps = {
  icon?: Icons;
  textColor?: Colors;
  backgroundColor?: Colors;
};

export type TagProps = ComponentProps<'span'> & BaseTagProps;

export type LinkTagProps = ComponentProps<'a'> & BaseTagProps;

export type TagButtonProps = Omit<ComponentProps<'button'>, 'children'> & {
  icon: Icons;
};
