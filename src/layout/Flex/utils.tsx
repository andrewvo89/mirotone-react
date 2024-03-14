import { CSSProperties } from 'react';
import styles from './Flex.module.css';

export function getAlignContentClassName(alignContent?: CSSProperties['alignContent']): string {
  return alignContent ? styles['align-content'] : '';
}

export function getAlignItemsClassName(alignItems?: CSSProperties['alignItems']): string {
  return alignItems ? styles['align-items'] : '';
}

export function getColumnGapClassName(columnGap?: CSSProperties['columnGap']): string {
  return columnGap ? styles['column-gap'] : '';
}

export function getFlexDirectionClassName(flexDirection?: CSSProperties['flexDirection']): string {
  return flexDirection ? styles['flex-direction'] : '';
}

export function getFlexFlowClassName(flexFlow?: CSSProperties['flexFlow']): string {
  return flexFlow ? styles['flex-flow'] : '';
}

export function getFlexWrapClassName(flexWrap?: CSSProperties['flexWrap']): string {
  return flexWrap ? styles['flex-wrap'] : '';
}

export function getGapClassName(gap?: CSSProperties['gap']): string {
  return gap ? styles['gap'] : '';
}

export function getJustifyContentClassName(justifyContent?: CSSProperties['justifyContent']): string {
  return justifyContent ? styles['justify-content'] : '';
}

export function getRowGapClassName(rowGap?: CSSProperties['rowGap']): string {
  return rowGap ? styles['row-gap'] : '';
}
