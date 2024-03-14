import { CSSProperties, ComponentProps } from 'react';

export type FlexProps = ComponentProps<'div'> & {
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  justifyContent?: CSSProperties['justifyContent'];
};
