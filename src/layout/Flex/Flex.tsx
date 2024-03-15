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
  if (alignContent) {
    flexStyles = { ...flexStyles, '--align-content': alignContent };
  }
  if (alignItems) {
    flexStyles = { ...flexStyles, '--align-items': alignItems };
  }
  if (columnGap) {
    flexStyles = { ...flexStyles, '--column-gap': columnGap };
  }
  if (flexDirection) {
    flexStyles = { ...flexStyles, '--flex-direction': flexDirection };
  }
  if (flexFlow) {
    flexStyles = { ...flexStyles, '--flex-flow': flexFlow };
  }
  if (flexWrap) {
    flexStyles = { ...flexStyles, '--flex-wrap': flexWrap };
  }
  if (gap) {
    flexStyles = { ...flexStyles, '--gap': gap };
  }
  if (justifyContent) {
    flexStyles = { ...flexStyles, '--justify-content': justifyContent };
  }
  if (rowGap) {
    flexStyles = { ...flexStyles, '--row-gap': rowGap };
  }

  return <div {...rest} ref={ref} className={classNames.join(' ')} style={flexStyles} />;
});

Flex.displayName = 'Flex';

export default Flex;
