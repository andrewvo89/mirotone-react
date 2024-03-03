import { forwardRef } from 'react';

import { SelectOptionProps } from './types';

const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <option {...rest} ref={ref} className={className}>
      {props.children}
    </option>
  );
});

SelectOption.displayName = 'SelectOption';

export default SelectOption;
