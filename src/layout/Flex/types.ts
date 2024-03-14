import { CSSProperties, ComponentProps } from 'react';

export type FlexProps = ComponentProps<'div'> & {
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
  columnGap?: CSSProperties['columnGap'];
  flexDirection?: CSSProperties['flexDirection'];
  flexFlow?: CSSProperties['flexFlow'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  justifyContent?: CSSProperties['justifyContent'];
  rowGap?: CSSProperties['rowGap'];
};
