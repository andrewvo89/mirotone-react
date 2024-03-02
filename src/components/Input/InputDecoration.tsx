import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { InputDecorationProps } from './types';
import { getBorderLeftClassName, getBorderRightClassName, getFlexModifierClassName } from './utils';

const InputDecoration = forwardRef<HTMLSpanElement, InputDecorationProps>((props, ref) => {
  const {
    className,
    children,
    borderLeft = false,
    borderRight = false,
    flexModifier: modifier = '4/4',
    ...rest
  } = props;

  const classNames = [
    'input-decoration',
    getBorderLeftClassName(borderLeft),
    getBorderRightClassName(borderRight),
    getFlexModifierClassName(modifier),
    className,
  ].filter(isNonEmptyString);

  return (
    <span ref={ref} {...rest} className={classNames.join(' ')}>
      {children}
    </span>
  );
});

InputDecoration.displayName = 'InputDecoration';

export default InputDecoration;
