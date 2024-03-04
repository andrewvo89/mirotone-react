import { ChangeEventHandler, forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TextAreaProps } from './types';
import { getSizeClassName } from './utils';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { value, onChange, size = 'medium', isDisabled = false, isReadOnly = false, className, ...rest } = props;

  const classNames = ['textarea', className, getSizeClassName(size)].filter(isNonEmptyString);

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => onChange?.(event.target.value);

  return (
    <textarea
      ref={ref}
      {...rest}
      className={classNames.join(' ')}
      onChange={onChangeHandler}
      disabled={isDisabled}
      readOnly={isReadOnly}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
