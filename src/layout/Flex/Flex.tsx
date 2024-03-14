import { forwardRef } from 'react';

import { FlexProps } from './types';
import { isNonEmptyString } from '../../utils/common';
import styles from './Flex.module.css';

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    className,
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,
    style = {},
    ...rest
  } = props;

  const classNames = [styles['flex'], className].filter(isNonEmptyString);

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{
        ...style,
        '--align-content': alignContent ?? 'unset',
        '--align-items': alignItems ?? 'unset',
        '--flex-direction': flexDirection ?? 'unset',
        '--flex-wrap': flexWrap ?? 'unset',
        '--gap': gap ?? 'unset',
        '--justify-content': justifyContent ?? 'unset',
      }}
    />
  );
});

Flex.displayName = 'Flex';

export default Flex;
