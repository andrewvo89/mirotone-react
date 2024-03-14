import { CSSProperties, forwardRef } from 'react';

import { FlexProps } from './types';
import { isNonEmptyString } from '../../utils/common';
import styles from './Flex.module.css';

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    className,
    alignContent,
    alignItems,
    columnGap,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,
    rowGap,
    style = {},
    ...rest
  } = props;

  const classNames = [styles['flex'], className].filter(isNonEmptyString);

  let flexStyles: CSSProperties = {};
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

  return <div {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, ...flexStyles }} />;
});

Flex.displayName = 'Flex';

export default Flex;
