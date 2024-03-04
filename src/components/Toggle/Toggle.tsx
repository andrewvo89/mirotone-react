import { ChangeEventHandler, forwardRef } from 'react';

import styles from './Toggle.module.css';
import { ToggleProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const { label, value, onChange, className, ...rest } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => onChange?.(event.target.checked);

  return (
    <label className='toggle'>
      <input {...rest} ref={ref} className={className} type='checkbox' checked={value} onChange={onChangeHandler} />
      {label ? <span>{label}</span> : <span className={styles['empty-label']} />}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
