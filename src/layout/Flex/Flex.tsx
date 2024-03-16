import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import styles from './Flex.module.css';
import { FlexProps } from './types';
import {
  getAlignContentClassName,
  getAlignItemsClassName,
  getColumnGapClassName,
  getFlexDirectionClassName,
  getFlexFlowClassName,
  getFlexWrapClassName,
  getGapClassName,
  getJustifyContentClassName,
  getRowGapClassName,
} from './utils';

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    className,
    alignContent,
    alignItems,
    columnGap,
    flexDirection,
    flexFlow,
    flexWrap,
    gap,
    justifyContent,
    rowGap,
    style = {},
    ...rest
  } = props;

  const classNames = [
    styles['flex'],
    getAlignContentClassName(alignContent),
    getAlignItemsClassName(alignItems),
    getColumnGapClassName(columnGap),
    getFlexDirectionClassName(flexDirection),
    getFlexFlowClassName(flexFlow),
    getFlexWrapClassName(flexWrap),
    getGapClassName(gap),
    getJustifyContentClassName(justifyContent),
    getRowGapClassName(rowGap),
    className,
  ].filter(isNonEmptyString);

  let flexStyles = { ...style };
  if (alignContent !== undefined) {
    flexStyles = { ...flexStyles, '--align-content': alignContent };
  }
  if (alignItems !== undefined) {
    flexStyles = { ...flexStyles, '--align-items': alignItems };
  }
  if (columnGap !== undefined) {
    flexStyles = { ...flexStyles, '--column-gap': columnGap };
  }
  if (flexDirection !== undefined) {
    flexStyles = { ...flexStyles, '--flex-direction': flexDirection };
  }
  if (flexFlow !== undefined) {
    flexStyles = { ...flexStyles, '--flex-flow': flexFlow };
  }
  if (flexWrap !== undefined) {
    flexStyles = { ...flexStyles, '--flex-wrap': flexWrap };
  }
  if (gap !== undefined) {
    flexStyles = { ...flexStyles, '--gap': gap };
  }
  if (justifyContent !== undefined) {
    flexStyles = { ...flexStyles, '--justify-content': justifyContent };
  }
  if (rowGap !== undefined) {
    flexStyles = { ...flexStyles, '--row-gap': rowGap };
  }

  return <div {...rest} ref={ref} className={classNames.join(' ')} style={flexStyles} />;
});

Flex.displayName = 'Flex';

export default Flex;
